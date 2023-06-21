const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Property extends Model {

    }

    Property.init({
        property_address: {
            type: DataTypes.STRING,
            field: 'property_address'
        },
        returns: {
            type: DataTypes.STRING,
            field: 'returns'
        },
        LVR: {
            type: DataTypes.STRING,
            field: 'LVR'
        },
        term: {
            type: DataTypes.STRING,
            field: 'term'
        },
        facility: {
            type: DataTypes.STRING,
            field: 'facuility'
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        }
    }, {
        sequelize,
        tableName: 'property',
        modelName: 'Property',
        timestamps: true
    })
    return Property
}