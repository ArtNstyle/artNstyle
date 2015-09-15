var artistCtrl = require('../controllers/artists.server.controller.js');

module.exports = function (app) {
    app.route('/api/artists')
        .get(artistCtrl.read)
        .post(artistCtrl.create)
        .put(artistCtrl.update)
        .delete(artistCtrl.remove);

    app.route('/api/artists/all')	
        .get(artistCtrl.readAll)
}