const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Captain', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hostel: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
