const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const announcementRoutes = require('./routes/announcements');
const captainRoutes = require('./routes/captains');
const eventRoutes = require('./routes/events');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/announcements', announcementRoutes);
app.use('/captains', captainRoutes);
app.use('/events', eventRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
