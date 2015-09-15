var cartCtrl = require('../controllers/cart.server.controller.js');

module.exports = function (app) {
    app.route('/api/cart')
        .get(cartCtrl.read)
        .post(cartCtrl.create)
        .put(cartCtrl.update)
        .delete(cartCtrl.remove);

}