const express = require("express");
const { getDataFromParam } = require("./utils");
const { getHotels } = require("./hotelData");
const { sortData } = require("./helperFunctions");

const app = express();
const port = 3000;

app.get("/hotels/sort/pricing", (req, res) => {
  const pricing = getDataFromParam(req, "pricing");
  const data = getHotels();
  switch (pricing) {
    case "low-to-high":
      res.json(data.sort(sortData("price", "a")));
      break;
    case "high-to-low":
      res.json(data.sort(sortData("price", "d")));
      break;
    default:
      res.json(data);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
