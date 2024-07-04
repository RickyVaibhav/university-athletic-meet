const { Model, DataTypes } = require('sequelize');

class Announcement extends Model {}

Announcement.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: require('../config/database'), // Import sequelize instance
    modelName: 'Announcement',
    timestamps: true
});

module.exports = Announcement;
