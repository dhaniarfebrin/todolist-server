const dbPool = require("../config/database");

const getAllTodos = () => {
    const query = "SELECT * FROM todos";
    return dbPool.execute(query);
};

const getAllTodosSpecific = (id) => {
    const query = `SELECT * FROM todos WHERE activity_group_id=${id}`;
    return dbPool.execute(query);
};

const getOneTodo = (id) => {
    const query = `SELECT * FROM todos WHERE todo_id=${id}`;
    return dbPool.execute(query);
};

const createTodo = ({ activity_group_id, title, is_active }) => {
    const query = `INSERT INTO todos(activity_group_id, title, priority, is_active, createdAt, updatedAt) VALUES (${activity_group_id}, '${title}', 'very-high', ${is_active}, current_timestamp(), current_timestamp())`;
    return dbPool.execute(query);
};

const updateTodo = ({ title, priority, is_active }, id) => {
    const query = `UPDATE todos SET title='${title}', priority='${priority}', is_active=${is_active}, updatedAt=current_timestamp() WHERE todo_id=${id}`;
    return dbPool.execute(query);
};

const deleteTodo = (id) => {
    const query = `DELETE FROM todos WHERE todo_id=${id}`;
    return dbPool.execute(query);
};

module.exports = {
    getAllTodos,
    getAllTodosSpecific,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo
};
