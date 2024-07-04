const { Model, DataTypes } = require('sequelize');

class Captain extends Model {}

Captain.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hostel: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: require('../config/database'), // Import sequelize instance
    modelName: 'Captain',
    timestamps: true
});

module.exports = Captain;
