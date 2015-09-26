var orderCtrl = require('../controllers/order.server.controller.js');

module.exports = function (app) {
    app.route('/api/order')
        .get(orderCtrl.read)
        .post(orderCtrl.create)
        .put(orderCtrl.update)
        .delete(orderCtrl.remove);

    app.route('/api/order/all')
        .get(orderCtrl.readAll)

}