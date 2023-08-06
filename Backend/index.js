// >>>>>>>>>>>>>>>>>>>>>> import all required modules <<<<<<<<<<<<<<<<<<<<<<<

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


// >>>>>>>>>>>>>>>>>>>>>>    importing file from different location    <<<<<<<<<<<<<<<<<<<<<<<

const { sequelize } = require("./config/db");
const { coinUserRoute } = require("./route/user.route");


// >>>>>>>>>>>>>>>>>>>>>>   Middleware section   <<<<<<<<<<<<<<<<<<<<<<<

app.use(express.json());
app.use(cors());


// >>>>>>>>>>>>>>>>>>>>>>  Home Route  <<<<<<<<<<<<<<<<<<<<<<<

app.get("/", (req, res) => {
  res.send("Welcome to  Cointab User Management");
});

// >>>>>>>>>>>>>>>>>>>>>>  Route Middleware section   <<<<<<<<<<<<<<<<<<<<<<<

app.use("/", coinUserRoute)


// >>>>>>>>>>>>>>>>>>>>>>    Listening the port    <<<<<<<<<<<<<<<<<<<<<<<

app.listen(process.env.PORT, async () => {
  try {
    sequelize.authenticate();
    sequelize
      .sync()
      .then(() => {
        console.log("Database connected.");
      })
      .catch((error) => {
        console.error("Error creating database tables:", error.message);
      });
    console.log(
      `Server is running on port ${process.env.PORT} and connected to DB`
    );
  } catch (error) {
    console.log(error);
  }
});
