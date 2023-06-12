const mongoose = require('mongoose');

const database = 'social_network_api_db'
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`);

// Export connection 
module.exports = mongoose.connection;
