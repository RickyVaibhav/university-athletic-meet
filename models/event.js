const { Model, DataTypes } = require('sequelize');

class Event extends Model {}

Event.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: require('../config/database'), // Import sequelize instance
    modelName: 'Event',
    timestamps: true
});

module.exports = Event;
