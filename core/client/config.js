process.env.NODE_ENV = process.env.NODE_ENV || 'production'; // change to development in order to work on localhost:5000
module.exports = require('./env/' + process.env.NODE_ENV + '.js');