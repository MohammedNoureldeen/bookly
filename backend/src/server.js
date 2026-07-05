const app = require("./app.js")
const config = require("./config/index.js")

console.log(config.port, config.env)
const srver = app.listen(config.port, () => {
    console.log(`Server is runing on port ${config.PORT}`)
})
