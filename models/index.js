const sequelize = require('../config/database');

const Announcement = require('./announcement');
const Captain = require('./captain');
const Event = require('./event');

module.exports = {
    sequelize,
    Announcement,
    Captain,
    Event
};
