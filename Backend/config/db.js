const Sequelize = require("sequelize");
require("dotenv").config();

// Create a Sequelize instance
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.URNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }
);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error.message);
  });

module.exports = { sequelize };
