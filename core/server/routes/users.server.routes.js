// routes of our RESTful API
var usersCtrl = require('../controllers/users.server.controller.js');

module.exports = function (app) {
    app.route('/api/users')
        .post(usersCtrl.postUser)
        .get(usersCtrl.getUsers);

    // THESE ENDPOINTS DO EXIST:
    // app.route('/api/users/:id')
    //     .get(usersCtrl.getUser)
    //     .patch(usersCtrl.patchUser)
    //     .put(usersCtrl.putUser)
    //     .delete(usersCtrl.deleteUser);
};