const express = require('express')
const router = express.Router()

const { getAllActivities, getOneActivity, createActivity } = require('../controller/activity')

router.get('/', getAllActivities)
router.post('/', createActivity)
router.get('/:id', getOneActivity)

module.exports = router