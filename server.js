const express = require("express");
const mongodb = require("mongodb").MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

app.get("/read", (req, res) => {});

app.post("/create", (req, res) => {});

app.delete("/delete/", (req, res) => {});
