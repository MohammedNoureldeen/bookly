// Src/config/index.js
const dotenv = require("dotenv")
const path = require("path")

// Load env file from the backend root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });



function requireEnv(name) {
    const value = process.env[name];

    if (value === undefined || value.trim() === "") {
        throw new Error(`Missing required enviroment variable ${name}`)
    }

    return value.trim()
}


function requirePort(name) {
    const raw = requireEnv(name);
    const port = Number(raw)

    if (!Number.isInteger(port) || port < 1 || port > 65535) {
        throw new Error(`${name} must be a vaild number between 1 and 65535 , got ${raw}`)
    }
    return port
}


function requireOneOf(name, allowed) {
    const value = requireEnv(name)

    if (!allowed.includes(value)) {
        throw new Error(`${name} must be a value in ${allowed}`)

    }
    return value
}


// Validate everything here , a single source of truth 
const config = {
    env: requireOneOf("NODE_ENV", ["DEV", "STG", "TEST"]),
    port: requirePort("PORT")
}


module.exports = config;