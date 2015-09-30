module.exports = function (app) {
    require('./contact.controller')(app);
    require('../../services/tickets.service.js')(app);
    require('../../services/loggedUserES5.service.js')(app);
};

