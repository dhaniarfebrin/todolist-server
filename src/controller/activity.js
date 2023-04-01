const ActivitiesModel = require("../models/activities");

module.exports = {
    getAllActivities: async function (req, res) {
        try {
            const [data] = await ActivitiesModel.getAllActivities();

            res.status(200).json({
                status: "Success",
                message: "Success",
                data: data,
            });
        } catch (err) {
            res.status(500).json({
                status: "Error",
                serverMessage: err,
            });
        }
    },
    getOneActivity: async (req, res) => {
        try {
            const { id } = req.params;
            const [data] = await ActivitiesModel.getOneActivity(id);

            if (data && data != 0) {
                res.status(200).json({
                    status: "Success",
                    message: "Success",
                    data: data,
                });
            } else {
                res.status(404).json({
                    status: "Not Found",
                    message: "Activity with ID 3 Not Found",
                });
            }
        } catch (err) {
            res.status(500).json({
                status: "Error",
                serverMessage: err,
            });
        }
    },
    createActivity: async (req, res) => {
        try {
            const payload = req.body;

            if (payload.title && payload.email) {
                await ActivitiesModel.createActivity(payload);

                res.status(201).json({
                    status: "Success",
                    message: "Success",
                    data: payload,
                });
            } else {
                res.status(400).json({
                    status: "Bad Request",
                    message: "The Fields cannot be null",
                });
            }
        } catch (err) {
            res.status(500).json({
                status: "Error",
                serverMessage: err,
            });
        }
    },
    updateActivity: async (req, res) => {
        try {
            const { id } = req.params;
            const [data] = await ActivitiesModel.getOneActivity(id);
            const payload = req.body;

            if (data == 0) {
                res.status(404).json({
                    status: "Not Found",
                    message: `Activity with ID ${id} Not Found`,
                });
            } else if (payload.title == 0) {
                res.status(400).json({
                    status: "Bad Request",
                    message: "The Fields cannot be null",
                });
            } else {
                await ActivitiesModel.updateActivity(payload, id);

                res.status(201).json({
                    status: "Success",
                    message: "Success",
                    data: payload,
                });
            }
        } catch (err) {
            res.status(500).json({
                status: "Error",
                serverMessage: err,
            });
        }
    },
    deleteActivity: async (req, res) => {
        try {
            const { id } = req.params;
            const [data] = await ActivitiesModel.getOneActivity(id);

            if (data == 0) {
                res.status(404).json({
                    status: "Not Found",
                    message: `Activity with ID ${id} Not Found`,
                });
            } else {
                await ActivitiesModel.deleteActivity(id);
                res.status(200).json({
                    status: "Success",
                    message: `Delete activity succes with the ID ${id}`,
                    data
                });
            }
        } catch (err) {
            res.status(500).json({
                status: "Error",
                serverMessage: err,
            });
        }
    },
};
