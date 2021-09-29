const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes");
const path = require("path")

require('dotenv').config()
const PORT = process.env.PORT || 3000

app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.
connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false

}
).then(console.log("mongodb connected"))
.catch((err) => {
    console.log(err)
    process.exit(1)
})

// routes
// app.use(require("./routes/api.js"))
// app.use(require("./routes/views.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
