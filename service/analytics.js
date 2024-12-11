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
    
    // ... (other methods remain the same)
  
    submitData: function() {
      const currentTime = Date.now();
      const payload = {
        ...this.data,
        timeOnPage: currentTime - this.data.lastPageStart,
        totalTimeOnApp: currentTime - this.data.sessionStart,
        userAgent: navigator.userAgent
      };
      
      fetch('http://localhost:3000/collect', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
      }).then(() => {
        this.data.clicks = [];
        this.data.pageViews = [];
      });
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    Analytics.init();
  });
  