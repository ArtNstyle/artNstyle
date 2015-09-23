var artCtrl = require('../controllers/arts.server.controller.js');

module.exports = function (app) {
    app.route('/api/arts')
        .get(artCtrl.read)
        .post(artCtrl.create)
        .put(artCtrl.update)
        .delete(artCtrl.remove);

    app.route('/api/arts/all')
        .get(artCtrl.readAll)
}