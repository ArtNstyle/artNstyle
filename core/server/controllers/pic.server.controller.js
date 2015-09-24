var fs = require('fs');
var lwip = require('lwip');
var Pic = require('../models/pic.server.model');
var PicData = require('../models/picData.server.model');

var getImageType = function (mimetype) {
    return mimetype.substring(6, mimetype.length);
}

var createPicImage = function (image, name, contentType) {
    return {data: image, name: name, contentType: contentType}
};

module.exports = {

    upload: function (req, res) {
        var tmp_path = req.file.path;
        var mimetype = req.file.mimetype;
        var imgType = getImageType(mimetype);
        var imgName = req.file.originalname;
        var thumbnailName = "tn_" + imgName;
        //console.log("tmp_path", tmp_path, imgName, thumbnailName, mimetype, req.file);

        var newPic = new Pic;
        fs.readFile(tmp_path, function (err, data) {
            if (err) return res.status(500).send(err);
            newPic.img = createPicImage(data, imgName, mimetype);
            lwip.open(tmp_path, imgType, function (oerr, image) {
                if (oerr) return res.status(500).send(oerr);
                image.contain(600, 600, function (err, croppedImage) {
                    if (err) console.log("image.scale error", err);
                    image.crop(600, 600, function (err, croppedImage) {
                        if (err) console.log("image.crop error", err);
                        croppedImage.toBuffer(imgType, function (err, buffer) {
                            if (err) console.log("toBuffer error", err);
                            newPic.thumbnail = createPicImage(buffer, thumbnailName, mimetype);
                            newPic.save(function (perr, picsResult) {
                                fs.unlink(tmp_path, function (uerr) {
                                    if (uerr) console.log("error deleting tmp file", uerr);
                                });
                                if (perr) return res.status(500).send(perr);

                                var newPicData = new PicData;
                                newPicData.name = imgName;
                                newPicData.picId = picsResult._id;
                                newPicData.save(function (derr, dataResult) {
                                    if (derr) return res.status(500).send(derr);
                                    else res.send(dataResult);
                                });
                            });
                        });
                    });
                });
            });
        });
    },

    // reads based on all/ PicData Id
    read: function(req, res) {
        PicData.find(req.query)
            .exec(function(err, result) {
                if (err) return res.status(500).send(err);
                else res.send(result);
            });
    },

    // reads based on picId
    readFullPic: function (req, res, next) {
        Pic.findById(req.query.id, function (err, doc) {
            if (err) return next(err);
            if(doc && doc.img) {
                res.contentType(doc.img.contentType);
                res.send(doc.img.data);
            } else {
                console.log("readFullPic: NO FULLPIC", req.query.id, doc);
                return next(err);
            }
        });
    },

    // reads based on picId
    readThumbnail: function (req, res, next) {
        Pic.findById(req.query.id, function (err, doc) {
            //console.log("readThumbnail", doc);
            if (err) return next(err);
            if(doc && doc.thumbnail) {
                res.contentType(doc.thumbnail.contentType);
                res.send(doc.thumbnail.data);
            } else {
                console.log("readThumbnail: NO THUMBNAIL", req.query.id, doc);
                return next(err);
            }

        });
    },

    // updates based on PicData ID
    update: function (req, res) {
        console.log("update", req.query.id, req.body);
        var id = req.query.id;
        var updatedObject = req.body;
        PicData.findByIdAndUpdate(id, updatedObject, {
            new: true
        }, function (err, result) {
            if (err) return res.status(500).send(err);
            else {
                console.log("update result", result);
                res.send(result);
            }
        });
    },

    // deletes based on picId
    delete: function (req, res) {
        console.log("delete query", req.query)
        var picIdQuery = req.query;
        var picId = req.query.picId;

        Pic.findByIdAndRemove(picId, function (perr, result) {
            if (perr) return res.status(500).send(perr);
            PicData.findOneAndRemove(picIdQuery, function (derr, result) {
                if (derr) return res.status(500).send(derr);
                else res.send(result);
            });
        });

    }
};