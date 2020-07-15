const express = require("express");
const app = express();

const { PORT } = require("./config");
const localPort = PORT || 5000;
const { db } = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to mongoose express');
});

app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});
app.use("/api/users", require("./routes/users"));

if (db) {
  console.log(`connected to database`);

  app.listen(localPort, () => {
    console.log(`server runs on port ${localPort}`);
  });
}