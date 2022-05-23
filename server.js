// @diltz
// server.js
// blog.diltzy.xyz

const express = require("express")
const helmet = require("helmet")
const sqlite3 = require("sqlite3")
const dotenv = require("dotenv")

const config = dotenv.config().parsed
const app = express()


app.listen(config.PORT, () => {
    console.log("App started on " + config.PORT)
})