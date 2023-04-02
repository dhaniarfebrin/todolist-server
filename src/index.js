require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()

app.use(express.json())

const activityRoutes = require('./routes/activity')
const todoRoutes = require('./routes/todos')

app.use('/activity-groups', activityRoutes)
app.use('/todo-items', todoRoutes)

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})