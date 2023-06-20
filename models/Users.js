const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {

    }

    Users.init({
        full_name: {
            type: DataTypes.STRING,
            field: 'full_name'
        },
        user_email: {
            type: DataTypes.STRING,
            field: 'user_email'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        },
        contact_no: {
            type: DataTypes.STRING,
            field: 'contact_no'
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            field: 'isAdmin',
            defaultValue: false,
        },
        isBlogger: {
            type: DataTypes.BOOLEAN,
            field: 'isBlogger',
            defaultValue: false,
        },
        isProperty: {
            type: DataTypes.BOOLEAN,
            field: 'isProperty',
            defaultValue: false,
        },
        // lead generator
        isLg: {
            type: DataTypes.BOOLEAN,
            field: 'isLg',
            defaultValue: false,
        },
        isTl: {
            type: DataTypes.BOOLEAN,
            field: 'isTl',
            defaultValue: false
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        }
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'Users',
        timestamps: true
    })
    return Users
}