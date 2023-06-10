const mongoose = require('mongoose');
const database = ''
mongoose.connect(`mongodb://127.0.0.1:27017${database}`);

// Export connection 
module.exports = mongoose.connection;
