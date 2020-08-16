const express = require("express");
const volleyball = require("volleyball");
const path = require("path");
const {db} = require("./db/index.js");


const app = express();

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/friends',require('./server'))

app.use(express.static(path.join(__dirname, "/public")));

const PORT = 3000;

async function init() {
  await db.sync();
  app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
  });
}

init();
