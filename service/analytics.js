const Analytics = {
    config: {
        endpoint: null,
        submitInterval: 60000
    },

    data: {
        clicks: [],
        pageViews: [],
        sessionStart: Date.now(),
        lastPageStart: Date.now(),
        ipAddress: null
    },

    init: function(config = {}) {
        this.config = { ...this.config, ...config };
        if (!this.config.endpoint) {
            console.error('Analytics: No endpoint specified');
            return;
        }
        document.addEventListener('click', this.trackClick.bind(this));
        window.addEventListener('beforeunload', this.submitData.bind(this));
        this.trackPageView();
        this.getIPAddress();
        setInterval(this.submitData.bind(this), this.config.submitInterval);
    },

    getIPAddress: function() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                this.data.ipAddress = data.ip;
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });
    },

    trackClick: function(event) {
        this.data.clicks.push({
            x: event.clientX,
            y: event.clientY,
            timestamp: Date.now()
        });
    },

    trackPageView: function() {
        this.data.pageViews.push({
            url: window.location.href,
            timestamp: Date.now()
        });
        this.data.lastPageStart = Date.now();
    },

    submitData: function() {
        const currentTime = Date.now();
        const payload = {
            ...this.data,
            timeOnPage: currentTime - this.data.lastPageStart,
            totalTimeOnApp: currentTime - this.data.sessionStart,
            userAgent: navigator.userAgent,
            ipAddress: this.data.ipAddress
        };
        fetch(this.config.endpoint, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            this.data.clicks = [];
            this.data.pageViews = [];
        });
    }
};

export default Analytics;
