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

    app.get('/get-entries', (req, res) => {
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
      res.end();
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

    app.put('/edit-entry', (req, res) => {
      collections.entries
        .updateOne(
          { _id: ObjectId(req.body.id) },
          {
            $push: {
              values: {
                $each: [
                  {
                    price: req.body.values.price,
                    amount: req.body.values.amount,
                    date: req.body.values.date,
                  },
                ],
              },
            },
          }
        )
        .catch((error) => console.error(error));
      res.end();
    });

    app.delete('/delete-item', (req, res) => {
      const { _id } = req.body;

      Object.keys(collections).map((collection) => {
        console.log(_id);

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
