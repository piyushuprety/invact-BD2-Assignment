const express = require("express");
const { getDataFromParam } = require("./utils");
const { getHotels } = require("./hotelData");
const { sortData, filterBy } = require("./helperFunctions");
const cors = require('cors')

const app = express();
app.use(cors())
const port = 3000;

app.get("/hotels", (req, res) => {
  const data = getHotels();
  res.json(data);
});

app.get("/hotels/sort/pricing", (req, res) => {
  const pricing = getDataFromParam(req, "pricing");
  const data = getHotels();
  if (pricing === "low-to-high") {
    res.json(data.sort(sortData("price", "a")));
  } else if (pricing === "high-to-low") {
    res.json(data.sort(sortData("price", "d")));
  } else {
    res.json(data);
  }
});

app.get("/hotels/sort/rating", (req, res) => {
  const rating = getDataFromParam(req, "rating");
  const data = getHotels();
  if (rating === "low-to-high") {
    res.json(data.sort(sortData("rating", "a")));
  } else if (rating === "high-to-low") {
    res.json(data.sort(sortData("rating", "d")));
  } else {
    res.json(data);
  }
});

app.get("/hotels/sort/reviews", (req, res) => {
  const reviews = getDataFromParam(req, "reviews");
  const data = getHotels();
  if (reviews === "least-to-most") {
    res.json(data.sort(sortData("reviews", "a")));
  } else if (reviews === "most-to-least") {
    res.json(data.sort(sortData("reviews", "d")));
  } else {
    res.json(data);
  }
});

app.get("/hotels/filter/amenity", (req, res) => {
  const amenity = getDataFromParam(req, "amenity");
  const data = getHotels();
  const filteredData = filterBy(data, "amenity", amenity);
  res.json(filteredData);
});

app.get("/hotels/filter/country", (req, res) => {
  const country = getDataFromParam(req, "country");
  const data = getHotels();
  const filteredData = filterBy(data, "country", country);
  res.json(filteredData);
});

app.get("/hotels/filter/category", (req, res) => {
  const category = getDataFromParam(req, "category");
  const data = getHotels();
  const filteredData = filterBy(data, "category", category);
  res.json(filteredData);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
