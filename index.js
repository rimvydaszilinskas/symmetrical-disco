const express = require("express");
const bodyParser = require("body-parser");

const utils = require("./utils");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/ping", (_, res) => {
  res.json({ status: "ok" });
});

app.post("/date/leap", (req, res) => {
  let date = new Date(req.body.date);

  if (isNaN(date)) {
    return res.status(400).json({ data: "Invalid date" });
  }

  res.json({ isLeap: utils.isLeapYear(date) });
});

app.post("/submit", (req, res) => {
  let date = new Date(req.body.date);

  if (isNaN(date)) {
    return res.status(400).json({ data: "Invalid date" });
  }

  let horoscope = utils.getHoroscope(req.body.value, date);

  if (horoscope === undefined || horoscope === null) {
    return res.status(400).json({ data: "Invalid data" });
  }

  let sign = utils.getSign(date);

  return res.json({ data: horoscope, sign: sign });
});

let appserver = app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  console.log("Listening on port 3000");
});

const close = () => {
  appserver.close();
};

module.exports = {
  app: app,
  close: close,
};
