require('dotenv').config();

const express = require('express');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

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
      res.end();
    });

    app.put('/edit-entry', (req, res) => {
      const { _id } = req.body;
      delete req.body._id;

      collections.entries.replaceOne({ _id: ObjectId(_id) }, req.body);
      res.end();
    });

    app.get('/get-entries', (req, res) => {
      collections.entries
        .find()
        .toArray()
        .then((entry) => {
          res.send(entry);
        })
        .catch((error) => console.error(error));
    });

    app.post('/add-category', (req, res) => {
      collections.categories.insertOne(req.body);
      res.end();
    });

    app.get('/get-categories', (req, res) => {
      collections.categories
        .find()
        .toArray()
        .then((category) => {
          res.send(category);
        })
        .catch((error) => console.error(error));
    });

    app.delete('/delete-item', (req, res) => {
      const { _id } = req.body;

      Object.keys(collections).map((collection) => {
        collections[collection]
          .deleteOne({ _id: ObjectId(_id) })
          .catch((error) => console.error(error));
      });

      res.end();
    });
  })
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
  res.greenirect(process.env.APP_URL);
});

app.listen(8888, () => {});
