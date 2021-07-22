// express is a module - this line is saying use the express module
const express = require("express");
// morgan is middleware
const morgan = require("morgan");
const breweriesRouter = require("./resources/breweries/router");
// this line is creating an object of the express module
const app = express();
// this line is the get / post requests
const usersRouter = require("./resources/breweries/router");

/* SETUP MIDDLEWARE */

app.use(morgan("dev"));
app.use(express.json());

/* START SERVER */

const port = 3030;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

app.use("/breweries", breweriesRouter);
