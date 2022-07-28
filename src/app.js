require('dotenv').config()

const express = require('express')
const cors = require('cors')
const pacient = require('./routes/pacientRoutes')
const volunteer = require('./routes/volunteerRoutes')
const index = require("./routes/index")
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const mongoose = require('./database/mongooseConnect')

mongoose.connect()

const app = express()

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*")
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})


app.use(express.json())
app.use(cors())
app.use("/", index);
app.use("/pacient", pacient);
app.use("/volunteer", volunteer);
app.use('/rota-documentacao-psicconnect-api', swaggerUi.serve, swaggerUi.setup(swaggerFile));



module.exports = app



