const dbPool = require('../config/database')

const getAllActivities = () => {
    const query = "SELECT * FROM activities"

    return dbPool.execute(query)
}

const getOneActivity = (id) => {
    const query = `SELECT * FROM activities WHERE activity_id = ${id}`

    return dbPool.execute(query)
}

const createActivity = ({ title, email }) => {
    const query = `INSERT INTO activities(title, email, createdAt, updatedAt) VALUES ('${title}', '${email}', current_timestamp(), current_timestamp())`

    return dbPool.execute(query)
}

const updateActivity = ({ title, email }, id) => {
    const query = `UPDATE activities SET title='${title}', email='${email}', updatedAt=current_timestamp() WHERE activity_id=${id}`
    
    return dbPool.execute(query)
}

const deleteActivity = (id) => {
    const query = `DELETE FROM activities WHERE activity_id = ${id}`

    return dbPool.execute(query)
}

module.exports = {
    getAllActivities,
    getOneActivity,
    createActivity,
    updateActivity,
    deleteActivity
}