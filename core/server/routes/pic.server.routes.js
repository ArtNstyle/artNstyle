var multer = require("multer");
var upload = multer({ dest: 'upload/'});

var picCtrl = require('../controllers/pic.server.controller.js');

var type = upload.single('file');
module.exports = function (app) {
    app.route('/api/pics')
        .get(picCtrl.read)
        .post(type, picCtrl.upload)
        .put(picCtrl.update)
        .delete(picCtrl.delete);

    app.route('/api/pics/fullPic')
        .get(picCtrl.readFullPic)

    app.route('/api/pics/thumbnail')
        .get(picCtrl.readThumbnail)

    app.route('/api/pics/all')
        .get(picCtrl.read)
}
