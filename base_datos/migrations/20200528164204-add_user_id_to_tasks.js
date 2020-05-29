'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Tasks', 'userId', { // Crear llave foranea
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
        return queryInterface.removeColumn('Tasks', 'userId');
    }
};