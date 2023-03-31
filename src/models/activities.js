const dbPool = require('../config/database')

const getAllActivities = () => {
    const query = "SELECT * FROM activities"

    return dbPool.execute(query)
}

const getOneActivity = (id) => {
    const query = `SELECT * FROM activities WHERE activity_id = ${id}`

    return dbPool.execute(query)
}

module.exports = {
    getAllActivities,
    getOneActivity
}