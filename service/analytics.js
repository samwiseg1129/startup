const Analytics = {
    data: {
      clicks: [],
      pageViews: [],
      sessionStart: Date.now(),
      lastPageStart: Date.now()
    },
  
    init: function() {
      document.addEventListener('click', this.trackClick.bind(this));
      window.addEventListener('beforeunload', this.submitData.bind(this));
      this.trackPageView();
      setInterval(this.submitData.bind(this), 60000); // Submit data every minute
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
        userAgent: navigator.userAgent
      };
  
      fetch('https://your-analytics-server.com/collect', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
      }).then(() => {
        this.data.clicks = [];
        this.data.pageViews = [];
      });
    }
  };
  
  Analytics.init();