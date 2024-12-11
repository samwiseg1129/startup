const express = require('express');
const app = express();

// The very basic data
let users = {}
let times = {}
let clicks = {}

// service port
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built in middleware
app.use(express.json())

// serve up front-end
app.use(express.static('public'));

//Router
var apiRouter = express.Router();
app.use('/api', apiRouter)


// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});



/// need help after this



//get data
apiRouter.get('analytics'), (req, res) => {
  res.send(analytics)
}






mongoose.connect('mongodb://localhost/analytics', { useNewUrlParser: true, useUnifiedTopology: true });

const AnalyticsSchema = new mongoose.Schema({
  clicks: Array,
  pageViews: Array,
  timeOnPage: Number,
  totalTimeOnApp: Number,
  userAgent: String,
  ipAddress: String,
  geolocation: Object, 
  timestamp: { type: Date, default: Date.now }
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);

app.post('/collect', async (req, res) => {
  try {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geoData = await getGeolocation(clientIp);
    
    const analyticsData = new Analytics({
      ...req.body,
      ipAddress: clientIp,
      geolocation: geoData
    });
    
    await analyticsData.save();
    res.status(200).send('Data received');
  } catch (error) {
    res.status(500).send('Error saving data');
  }
});

async function getGeolocation(ip) {
  try {
    const response = await axios.get(`http://api.ipstack.com/${ip}?access_key=YOUR_IPSTACK_API_KEY`);
    return response.data;
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return null;
  }
}

app.get('/data', async (req, res) => {
  try {
    const data = await Analytics.find().sort('-timestamp').limit(100);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => console.log(`Analytics server running on port ${port}`));




// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const axios = require('axios'); // Add this line to import axios

// const app = express();
// const port = process.argv.length > 2 ? process.argv[2] : 3000;

// app.use(express.static('public'));
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/analytics', { useNewUrlParser: true, useUnifiedTopology: true });

// const AnalyticsSchema = new mongoose.Schema({
//   clicks: Array,
//   pageViews: Array,
//   timeOnPage: Number,
//   totalTimeOnApp: Number,
//   userAgent: String,
//   ipAddress: String,
//   geolocation: Object, 
//   timestamp: { type: Date, default: Date.now }
// });

// const Analytics = mongoose.model('Analytics', AnalyticsSchema);

// app.post('/collect', async (req, res) => {
//   try {
//     const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//     const geoData = await getGeolocation(clientIp);
    
//     const analyticsData = new Analytics({
//       ...req.body,
//       ipAddress: clientIp,
//       geolocation: geoData
//     });
    
//     await analyticsData.save();
//     res.status(200).send('Data received');
//   } catch (error) {
//     res.status(500).send('Error saving data');
//   }
// });

// async function getGeolocation(ip) {
//   try {
//     const response = await axios.get(`http://api.ipstack.com/${ip}?access_key=YOUR_IPSTACK_API_KEY`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching geolocation data:', error);
//     return null;
//   }
// }

// app.get('/data', async (req, res) => {
//   try {
//     const data = await Analytics.find().sort('-timestamp').limit(100);
//     res.json(data);
//   } catch (error) {
//     res.status(500).send('Error fetching data');
//   }
// });

// app.listen(port, () => console.log(`Analytics server running on port ${port}`));
