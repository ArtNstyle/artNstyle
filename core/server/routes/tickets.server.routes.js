// routes of our RESTful API
var ticketsCtrl = require('../controllers/tickets.server.controller.js');

module.exports = function (app) {
    app.route('/api/tickets')
        .post(ticketsCtrl.postTicket)
        .get(ticketsCtrl.getTickets);

    app.route('/api/tickets/:id')
        .get(ticketsCtrl.getOneTicket)
        .put(ticketsCtrl.putTicket)
        .delete(ticketsCtrl.deleteTicket);
};