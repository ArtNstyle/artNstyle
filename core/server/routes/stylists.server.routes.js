var stylistCtrl = require('../controllers/stylists.server.controller.js');

module.exports = function (app) {
    app.route('/api/stylists')
        .get(stylistCtrl.read)
        .post(stylistCtrl.create)
        .put(stylistCtrl.update)
        .delete(stylistCtrl.remove);

    app.route('/api/stylists/all')	
        .get(stylistCtrl.readAll)
}