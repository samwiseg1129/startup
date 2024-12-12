const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('ProductTrack');
const userCollection = db.collection('user');

// Test database connection
(async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    await db.command({ ping: 1 });
  } catch (error) {
    console.error(`Unable to connect to database: ${error.message}`);
    process.exit(1);
  }
})();

async function getUser(email) {
  return await userCollection.findOne({ email });
}

async function getUserByToken(token) {
  return await userCollection.findOne({ token });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = { email, password: passwordHash, token: uuid.v4() };
  console.log(`this is the user:${user}`)
  console.dir(user)
  await userCollection.insertOne(user);
  return user;
}

module.exports = { getUser, getUserByToken, createUser };

////////////

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
//     const response = await axios.get(`http://api.ipstack.com/${ip}?access_key=713aa0d2ecb3e23ef241959ffdf8b4bc`);
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