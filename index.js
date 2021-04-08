const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.b96xw.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority`;

const port = process.env.PORT || 5054;

app.use(bodyParser.json());
app.use(cors());


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("volunteer").collection("devices");
  // client.close();
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port);