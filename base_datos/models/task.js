'use strict';
const serverSocket = require('../realtime/client');

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        description: DataTypes.TEXT
    }, {});
    Task.associate = function(models) {
        // associations can be defined here
        Task.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });

        Task.belongsToMany(models.Category, { through: 'TaskCategories', as: 'categories' });
    };

    /* ============= Hooks ============= */
    // despues de crear un registro
    Task.afterCreate(function(task, options) {
        serverSocket.emit('new_task', task);
    });

    return Task;
};