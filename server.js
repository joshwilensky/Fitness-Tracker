const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
//middleware
// app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
});

//routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
});