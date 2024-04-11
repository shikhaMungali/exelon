const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config/config');
const chalk = require('chalk');

async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(chalk.yellowBright('MongoDB connected successfully'));
    } catch (error) {
        console.error(chalk.red('MongoDB connection error:', error));
    }
}

module.exports = connectDB;
