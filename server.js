const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});