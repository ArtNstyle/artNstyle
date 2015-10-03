// MONGOOSE CONFIGURATION FILE
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    if(! config.db) {
        console.log("no mongo db");
        return;
    }

    var db = mongoose.connect(config.db);
    require('../models/user.server.model');
    require('../models/artist.server.model');
    require('../models/order.server.model');
    require('../models/event.server.model');
    require('../models/stylist.server.model');
    require('../models/tanning.server.model');

    require('../models/ticket.server.model');

    require('../models/stripe.server.model');

    return db;
};