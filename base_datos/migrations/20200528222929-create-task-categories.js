'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('TaskCategories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            taskId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'tasks'
                    },
                    key: 'id'
                }
            },
            categoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'categories'
                    },
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('TaskCategories');
    }
};