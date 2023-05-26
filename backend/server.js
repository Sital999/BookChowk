const express = require("express");

require("dotenv").config();
const errorHandler = require("./midlleware/errorHandlerMidlleware");

// for cross site request
const cors = require("cors");

const port = process.env.PORT_NUMBER || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connection to database
const { db } = require("./models");
db.sequelize
  .sync()
  .then(() => console.log("successfully connected to database"));

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/semester", require("./routes/semesterRoutes"));
app.use("/api/department", require("./routes/departmentRoutes"));
app.use("/api/book", require("./routes/bookRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));

// handling errors
app.use(errorHandler);
app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
