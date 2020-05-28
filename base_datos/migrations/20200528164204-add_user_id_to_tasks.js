'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('tasks', 'userId', { // Crear llave foranea
            type: Sequelize.INTEGER,
            references: { // Modelo y campo referenciado
                model: {
                    tableName: 'Users'
                },
                key: 'id'
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('tasks', 'userId');
    }
};