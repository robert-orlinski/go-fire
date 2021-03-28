const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const { mongoUri } = require('./auth/mongoUri');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

MongoClient.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    const db = client.db('fire-app-db');
    const entriesCollection = db.collection('entries');

    app.post('/add-entry', (req, res) => {
      entriesCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result.json());
        })
        .catch((error) => console.error(error));
    });

    app.get('/get-all-entries', (req, res) => {
      entriesCollection
        .find()
        .toArray()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
  res.redirect('http://localhost:3002');
});

app.listen(8888, () => {});
