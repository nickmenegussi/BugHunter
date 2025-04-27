const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const port = 3001

const user = require('./routers/UserRouter')
const historic = require('./routers/HistoricRouter')
const experiencies = require('./routers/ExperienciesRouter')

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
app.use(express.urlencoded({ extended: true }))


app.use('/user', user)
app.use('/historic', historic)
app.use('/experiencies', experiencies)

app.listen(port, () => console.log(`Rodando na porta ${port}`))