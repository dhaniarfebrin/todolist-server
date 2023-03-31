const express = require('express')
const router = express.Router()

const { getAllActivities, getOneActivity } = require('../controller/activity')

router.get('/', getAllActivities)
router.get('/:id', getOneActivity)

module.exports = router