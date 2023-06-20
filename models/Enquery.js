const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Enquery extends Model {

    }

    Enquery.init({
        full_name: {
            type: DataTypes.STRING,
            field: 'full_name'
        },
        user_email: {
            type: DataTypes.STRING,
            field: 'user_email'
        },
        contact_no: {
            type: DataTypes.STRING,
            field: 'password'
        },
        location: {
            type: DataTypes.STRING,
            field: 'password'
        },
        description: {
            type: DataTypes.STRING,
            field: 'description'
        },
        property_id: {
            type: DataTypes.INTEGER,
            field: 'property_id'
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        },
        status: {
            type: DataTypes.INTEGER,
            field: 'status'
        }
    }, {
        sequelize,
        tableName: 'enquery',
        modelName: 'Enquery',
        timestamps: true
    })
    return Enquery
}