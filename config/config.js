require('dotenv').config();
module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/imageDB',
    PORT_PROD: process.env.PORT_PROD || 5000,
    PORT_DEV: process.env.PORT_DEV || 3001,
};
