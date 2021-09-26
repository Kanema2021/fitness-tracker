const express = require("express");
const router = express.Router();

const viewsRoute = require("./views.js")

router.use('/', viewsRoute)

module.exports = router