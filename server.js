const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const announcementRoutes = require('./routes/announcements');
const captainRoutes = require('./routes/captains');
const eventRoutes = require('./routes/events');

app.use('/announcements', announcementRoutes);
app.use('/captains', captainRoutes);
app.use('/events', eventRoutes);

app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    try {
        await sequelize.sync();
        console.log('Database connected and synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
