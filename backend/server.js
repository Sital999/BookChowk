const express = require("express");
const errorHandler = require("./midlleware/errorHandlerMidlleware");
// configuring . env file
require("dotenv").configure

const port=process.env.PORT ||8000
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connection to database
const { db } = require("./models");
db.sequelize
  .sync({force:true})
  .then(() => console.log("successfully connected to database"));

app.use("/api/user", require("./routes/userRoutes"));
// handling errors
app.use(errorHandler);
app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
