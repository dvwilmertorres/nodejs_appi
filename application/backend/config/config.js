// config.js

module.exports = {
    mongodb: {
        url: process.env.MONGODB_URL || 'mongodb://admin:admin@ec2-54-87-13-121.compute-1.amazonaws.com:27017/?tls=false&authSource=unirdb',
        dbName: process.env.MONGODB_DB_NAME || 'unirdb'
    }
};
