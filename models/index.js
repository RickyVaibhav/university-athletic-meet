const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const Announcement = require('./announcement')(sequelize);
const Captain = require('./captain')(sequelize);
const Event = require('./event')(sequelize);

module.exports = {
  sequelize,
  Announcement,
  Captain,
  Event
};
