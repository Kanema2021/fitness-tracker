const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const api = require("./routes/api");
const views = require("./routes/views");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json)

mongoose.connect('mongodb://localhost:27017/fitness-tracker')

app.use(api)
app.use(views)





app.listen(PORT, () => console.log("listening on port: "), PORT)