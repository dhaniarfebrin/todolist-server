require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
const app = express()

app.use(express.json())

const activityRoutes = require('./routes/activity')

app.use('/activity-groups', activityRoutes)

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})