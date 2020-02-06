const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true ,useUnifiedTopology: true});
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', () => {
        console.log('MongoDB: Error');
    });
};