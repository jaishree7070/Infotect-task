const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const mongoDbURL =
  "mongodb+srv://rjaishree0707:WePDKI6oWNzdwPZL@cluster0.8s5qepe.mongodb.net/table?retryWrites=true&w=majority";
//WePDKI6oWNzdwPZL rjaishree0707
const errorController = require("./controller/error");
const adminRoutes = require("./routes/admin");
// const homeRoutes = require("./routes/home");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/admin", adminRoutes);
// app.use(homeRoutes);
app.use(errorController.get404);

mongoose
  .connect(mongoDbURL)
  .then((result) => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });
