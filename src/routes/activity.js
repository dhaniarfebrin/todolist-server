const express = require('express')
const router = express.Router()

const { getAllActivities, getOneActivity, createActivity, updateActivity, deleteActivity } = require('../controller/activity')

router.get('/', getAllActivities)
router.post('/', createActivity)
router.get('/:id', getOneActivity)
router.patch('/:id', updateActivity)
router.delete('/:id', deleteActivity)

module.exports = router