require('dotenv').config()
const express = require('express')
const db = require('./models')
const cors = require('cors')
const app = express()
require('./config/passport/passport')

const userRoute = require('./routes/user')
const todoRoute = require('./routes/todo')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', userRoute)
app.use('/todos', todoRoute)

db.sequelize.sync().then(() => {
    app.listen(8000, () => console.log(`Listening on port 8000`))
})