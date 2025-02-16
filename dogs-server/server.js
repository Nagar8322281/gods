const express = require("express")
const cors = require('cors')


const api  = require('./api')
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api",api)

app.listen(3000,console.log("Server is running on http://localhost:3000"));
