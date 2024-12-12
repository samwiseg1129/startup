// import bcrypt from 'bcrypt'
const bcrypt = require('bcrypt');
const express = require('express');
const uuid = require('uuid');
const { createUser, getUser } = require('./database');
//////V
const http = require('http');
const { WebSocketServer } = require('ws');
const { saveMessage } = require('./database');
//////^
const app = express();


// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let scores = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Function to get IP address using ipify API
async function getIPAddress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return null;
  }
};

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const ipAddress = await getIPAddress();
    const user = {
      email: req.body.email,
      password: req.body.password,
      token: uuid.v4(),
      ipAddress: ipAddress
    };
    users[user.email] = user;
    await createUser(user.email, user.password)

    res.send({ token: user.token, ipAddress: user.ipAddress });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email)
  console.log(user)
  if (user) {
    const isCorrectPassword = await bcrypt.compare(req.body.password,user.password)
    if (isCorrectPassword) {
      user.token = uuid.v4();
      user.ipAddress = await getIPAddress(); // Update IP address on login
      res.send({ token: user.token, ipAddress: user.ipAddress });
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
    delete user.ipAddress;
  }
  res.status(204).end();
});

// Get user info (including IP address)
apiRouter.get('/user', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.query.token);
  if (user) {
    res.send({ email: user.email, ipAddress: user.ipAddress });
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
});

// apiRouter.post('/submit-clicks', async (req, res) => {
//   try {
//     // Here you would typically save the click counts to the database
//     // For now, we'll just log them
//     console.log('Received click counts:', req.body.clickCounts);
//     res.status(200).send({ msg: 'Click counts received' });
//   } catch (error) {
//     res.status(500).send({ msg: 'Error saving click counts' });
//   }
// });



/////////V

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('New WebSocket client connected');

  ws.on('message', async (message) => {
    console.log(`Received: ${message}`);
    
    // Save the message to MongoDB
    await saveMessage(message.toString());

    // Echo the message back to the client
    ws.send(`I heard you say: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});
////////^


app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});














// // GetScores
// apiRouter.get('/scores', (_req, res) => {
//   res.send(scores);
// });

// // SubmitScore
// apiRouter.post('/score', (req, res) => {
//   scores = updateScores(req.body, scores);
//   res.send(scores);
// });

// // Return the application's default page if the path is unknown
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// // updateScores considers a new score for inclusion in the high scores.
// function updateScores(newScore, scores) {
//   let found = false;
//   for (const [i, prevScore] of scores.entries()) {
//     if (newScore.score > prevScore.score) {
//       scores.splice(i, 0, newScore);
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     scores.push(newScore);
//   }

//   if (scores.length > 10) {
//     scores.length = 10;
//   }

//   return scores;









// const express = require('express');
// const app = express();

// // The very basic data
// let users = {}
// let times = {}
// let clicks = {}

// // service port
// const port = process.argv.length > 2 ? process.argv[2] : 3000;

// // JSON body parsing using built in middleware
// app.use(express.json())

// // serve up front-end
// app.use(express.static('public'));

// //Router
// var apiRouter = express.Router();
// app.use('/api', apiRouter)


// // CreateAuth a new user
// apiRouter.post('/auth/create', async (req, res) => {
//   const user = users[req.body.email];
//   if (user) {
//     res.status(409).send({ msg: 'Existing user' });
//   } else {
//     const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
//     users[user.email] = user;

//     res.send({ token: user.token });
//   }
// });

// // GetAuth login an existing user
// apiRouter.post('/auth/login', async (req, res) => {
//   const user = users[req.body.email];
//   if (user) {
//     if (req.body.password === user.password) {
//       user.token = uuid.v4();
//       res.send({ token: user.token });
//       return;
//     }
//   }
//   res.status(401).send({ msg: 'Unauthorized' });
// });

// // DeleteAuth logout a user
// apiRouter.delete('/auth/logout', (req, res) => {
//   const user = Object.values(users).find((u) => u.token === req.body.token);
//   if (user) {
//     delete user.token;
//   }
//   res.status(204).end();
// });


// /// need help after this


// //get data
// apiRouter.get('analytics'), (req, res) => {
//   res.send(analytics)
// }






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
