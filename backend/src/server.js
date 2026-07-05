const app = require("./app")
const dotenv = require("dotenv")



dotenv.config()

const PORT = process.env.PORT || 3000
console.log(process.env.PORT, process.env.NODE_ENV)

const srver = app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})