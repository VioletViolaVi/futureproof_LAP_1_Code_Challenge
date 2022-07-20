const express = require("express");
const cors = require("cors");
const allCatData = require("./data");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Cat API");
});

app.get("/allCatData", (req, res) => {
  res.send(allCatData);
});

app.get("/allCatData/:id", (req, res) => {
  // id from req
  const id = req.params.id;

  const catToFind = allCatData.filter((singleCatObj) => {
    return singleCatObj["id"] === parseInt(id); // id would be a string otherwise
  });

  console.log(catToFind);

  // if not present return 404
  if (!catToFind) {
    res.status(404).send("This cat could not be found.");
    return;
  }

  // error handling
  if (catToFind.length === 1) {
    res.send(catToFind[0]["name"]);
    return;
  } else {
    res
      .status(404)
      .send("There is no cat with that ID. Choose between 1 and 10.");
    return;
  }
});

module.exports = app;
