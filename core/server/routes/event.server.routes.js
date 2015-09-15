var eventCtrl = require('../controllers/event.server.controller.js');

module.exports = function (app) {
    app.route('/api/events')
        .get(eventCtrl.read)
        .post(eventCtrl.create)
        .put(eventCtrl.update)
        .delete(eventCtrl.remove);

    app.route('/api/events/all')	
        .get(eventCtrl.readAll)
}