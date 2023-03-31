const ActivitiesModel = require('../models/activities')

module.exports = {
    getAllActivities: async function (req, res) {
        try {
            const [ data ] = await ActivitiesModel.getAllActivities()

            res.status(200).json({
                status: "Success",
                message: "Success",
                data: data
            })
        } catch (err) {
            res.status(500).json({
                status: "Failed",
                serverMessage: err,
            })
        }
    },
    getOneActivity: async (req, res) => {
        try {
            const { id } = req.params
            const [ data ] = await ActivitiesModel.getOneActivity(id)

            if (data && data != 0) {
                res.status(200).json({
                    status: "Success",
                    message: "Success",
                    data: data
                })
            } else {
                res.status(404).json({
                    status: "Not Found",
                    message: "The Activity cannot be found",
                })
            }

        } catch (err) {
            res.status(500).json({
                status: "Failed",
                serverMessage: err,
            })
        }
    },
    createActivity: async (req, res) => {
        try {
            const payload = req.body

            if (payload.title && payload.email) {
                await ActivitiesModel.createActivity(payload)

                res.status(200).json({
                    status: "Success",
                    message: "Success",
                    data: payload
                })
            } else {
                res.status(404).json({
                    status: "Failed",
                    message: "The Fields cannot be null",
                })
            }

        } catch (err) {
            res.status(500).json({
                status: "Failed",
                serverMessage: err,
            })
        }
    }
}