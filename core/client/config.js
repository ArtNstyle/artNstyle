process.env.NODE_ENV = process.env.NODE_ENV || 'production';
module.exports = require('./env/' + process.env.NODE_ENV + '.js');