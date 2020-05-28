'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password_hash: DataTypes.STRING,
        password: DataTypes.VIRTUAL // campo virtual
    }, {});
    User.associate = function(models) {
        // associations can be defined here (hasMany = tiene muchos || belongsTo = le pertenece a)
        User.hasMany(models.Task);
    };

    // Añadir metodo a la clase
    User.login = function(email, password) {
        // Buscar al usuario
        return User.findOne({ where: { email } }).then(user => {
            if (!user) return null; // no existe el usuario
            return user.authenticatePassword(password).then(valid => valid ? user : null);
        }).catch(error => {
            console.log(error);
        });
    }

    // Añadir metodo al objeto
    User.prototype.authenticatePassword = function(password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, this.password_hash, function(err, valid) {
                if (err) reject(err);
                resolve(valid);
            });
        });
    }

    // Antes de crear el registro
    User.beforeCreate(function(user, options) {
        return new Promise((resolve, reject) => {
            if (user.password) { // Si esta definido
                bcrypt.hash(user.password, 10, function(error, hash) {
                    user.password_hash = hash; // Almacenar hash
                    resolve();
                });
            }

        });
    });
    return User;
};