const express = require("express");
const app = express();
const ejs = require('ejs');

const { PORT } = require("./config");
const localPort = PORT || 5000;
const { db } = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("pages/home");
});
app.use("/api/movies", require("./routes/movies"));

if (db) {
  console.log(`connected to database`);

  app.listen(localPort, () => {
    console.log(`server runs on port ${localPort}`);
  });
}