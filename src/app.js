const express = require('express');
const connectDB = require('./db');
const chalk = require('chalk');
const figlet = require('figlet');
const imageRoutes = require('./routes/imageRoutes');
const { PORT_PROD, PORT_DEV } = require('../config/config');

const app = express();
app.use(express.json());

connectDB(); // MongoDB Connection

app.use('/api', imageRoutes);

const port = process.env.NODE_ENV === 'production' ? PORT_PROD : PORT_DEV;
app.listen(port, () => {
    // Generate ASCII art for the server startup message
    figlet('exelon ', (err, data) => {
        if (err) {
            console.log('Error generating ASCII art:', err);
            return;
        }
        console.log(chalk.greenBright(data));
        console.log(chalk.yellowBright(`Server is running on port ${port}`));
    });
});
