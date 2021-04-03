require('dotenv').config();
const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

MongoClient.connect(process.env.ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    const db = client.db('fire-app-db');

    const collections = {
      entries: db.collection('entries'),
      categories: db.collection('categories'),
    };

    app.post('/add-entry', (req, res) => {
      collections.entries.insertOne(req.body);
    });

    app.get('/get-all-entries', (req, res) => {
      collections.entries
        .find()
        .toArray()
        .then((result) => {
          res.send(result);
        })
        .catch((error) => console.error(error));
    });

    app.post('/add-category', (req, res) => {
      collections.categories.insertOne(req.body);
    });

    app.get('/get-categories', (req, res) => {
      collections.categories
        .find()
        .toArray()
        .then((result) => {
          res.send(result);
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
  res.redirect('http://localhost:3000');
});

app.listen(8888, () => {});
