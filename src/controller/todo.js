const TodosModel = require("../models/todos");

module.exports = {
    getAllTodos: async (req, res) => {
        try {
            const { query } = req;

            if (Object.keys(query).length === 0) {
                const [data] = await TodosModel.getAllTodos();
                res.status(200).json({
                    status: "Success",
                    message: "Success",
                    data: data,
                });
            } else {
                const [data] = await TodosModel.getAllTodosSpecific(
                    query.activity_group_id
                );
                res.status(200).json({
                    status: "Success",
                    message: "Success",
                    data: data,
                });
            }
        } catch (err) {
            res.status(500).json({
                status: "Error",
                serverMessage: err,
            });
        }
    },
    getOneTodo: async (req, res) => {
        try {
            const { id } = req.params;
            const [data] = await TodosModel.getOneTodo(id);

            if (data == 0) {
                res.status(404).json({
                    status: "Not Found",
                    message: `Todo with ID ${id} Not Found`,
                });
            } else {
                res.status(200).json({
                    status: "Success",
                    message: "Success",
                    data: data,
                });
            }
        } catch (err) {
            res.status(500).json({
                status: "Error",
                serverMessage: err,
            });
        }
    },
    createTodo: async (req, res) => {
        try {
            const payload = req.body;

            if (payload.title == 0 || payload.activity_group_id == 0) {
                res.status(400).json({
                    status: "Bad Request",
                    message: "The Fields cannot be null",
                });
            } else {
                await TodosModel.createTodo(payload);
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
    updateTodo: async (req, res) => {
        try {
            const payload = req.body;
            const { id } = req.params;

            const [data] = await TodosModel.getOneTodo(id);

            if (data == 0) {
                res.status(404).json({
                    status: "Not Found",
                    message: `Todo with ID ${id} Not Found`,
                });
            } else {
                await TodosModel.updateTodo(payload, id);
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
    deleteTodo: async (req, res) => {
        try {
            const { id } = req.params;
            const [data] = await TodosModel.getOneTodo(id);

            if (data == 0) {
                res.status(404).json({
                    status: "Not Found",
                    message: `Todo with ID ${id} Not Found`,
                });
            } else {
                await TodosModel.deleteTodo(id)
                res.status(200).json({
                    status: "Success",
                    message: "Success",
                    data: data,
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
