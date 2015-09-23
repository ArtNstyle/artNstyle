var tanningCtrl = require('../controllers/tanning.server.controller.js');

module.exports = function (app) {
    app.route('/api/tanning')
        .get(tanningCtrl.read)
        .post(tanningCtrl.create)
        .put(tanningCtrl.update)
        .delete(tanningCtrl.remove);

    app.route('/api/tanning/all')	
        .get(tanningCtrl.readAll)
}