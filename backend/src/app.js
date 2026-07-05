const express = require("express")
const cors = require("cors")



const app = express()

app.use(cors())
app.use(express.json())


app.get("/health", (req, res) => {
    res.json({
        message: "Everything is good",
        Sucess: "Great first step"
    })
})

module.exports = app;
