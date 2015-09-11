var express = require("express");
//var bodyParser = require("body-parser");
//var cors = require("cors");
//var multer = require("multer");
//var upload = multer({ dest: 'upload/'});

// passport specific
//var session = require('express-session');
//var passport = require('passport');
//var FacebookStrategy = require('passport-facebook').Strategy;
//var keys = require('./keys.js');

//var FACEBOOK_APP_ID = keys.FACEBOOK_APP_ID;
//var FACEBOOK_APP_SECRET = keys.FACEBOOK_APP_SECRET;
////

var app = express();
//var config = require('./config.js');
//console.log("config", config);
//
//app.use(function(req, res, next){
//    console.log('%s %s', req.method, req.url);
//    next();
//});
// MIDDLEWARE
app.use(express.static(__dirname + "/dist"));
//app.use(bodyParser.urlencoded({
//    extended: true
//}));
//
//// passport specific
//app.use(session({
//    secret: 'some-random-string'
//}));
//app.use(passport.initialize());
//app.use(passport.session());
////
//app.use(bodyParser.json());
//app.use(cors());
//
//// passport specific
//passport.use(new FacebookStrategy({
//    clientID: FACEBOOK_APP_ID,
//    clientSecret: FACEBOOK_APP_SECRET,
//    callbackURL: 'http://'+ config.ip + ':' + config.portNum + '/auth/facebook/callback'
//}, function(token, refreshToken, profile, done) {
//    console.log("profile: ", profile);
//    return done(null, profile);
//}));
//
//app.get('/auth/facebook', passport.authenticate('facebook'));
//app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//    successRedirect: '/',
//    failureRedirect: '/auth/Facebook'
//}), function(req, res) {
//    console.log("req.session", req.session);
//});
//passport.serializeUser(function(user, done) {
//    done(null, user);
//});
//passport.deserializeUser(function(obj, done) {
//    done(null, obj);
//});
////
//
//app.get('/api/pocketScrum/logout', function(req, res){
//    req.logout();
//    res.redirect("http://" + config.ip + ":" + config.portNum + "/#/login");
//});
//app.get('/api/pocketScrum/me', function(req, res) {
//    console.log("me", req.user);
//    res.send(req.user);
//});
//
//
//// APIs
//var PicCtrl = require("./controllers/PicCtrl");
//
//import { StatusCtrl, TeamMemberCtrl, UserStoryCtrl, FeatureCtrl, ProjectCtrl }  from './controllers/BaseCtrl-compiled.js';
//let aStatusCtrl = new StatusCtrl();
//let aTeamMemberCtrl = new TeamMemberCtrl();
//let aUserStoryCtrl = new UserStoryCtrl();
//let aFeatureCtrl = new FeatureCtrl();
//let aProjectCtrl = new ProjectCtrl();
//
//
//var type = upload.single('file');
//app.post('/api/pocketScrum/designpic', type, PicCtrl.upload);   // add one pic, thumb & data
//
//app.get("/api/pocketScrum/designpic", PicCtrl.read);            // get list of pic data
//app.get("/api/pocketScrum/fullpic", PicCtrl.readFullPic);       // get one full pic image
//app.get("/api/pocketScrum/thumbnail", PicCtrl.readThumbnail);   // get one thumbnail image
//
//app.put("/api/pocketScrum/designpic", PicCtrl.update);          // update pic data for one pic
//app.delete("/api/pocketScrum/designpic", PicCtrl.delete);       // delete one pic, thumb & data
//
//app.post('/api/pocketScrum/status', aStatusCtrl.create.bind(aStatusCtrl));
//app.get("/api/pocketScrum/status", aStatusCtrl.read.bind(aStatusCtrl));
//app.put("/api/pocketScrum/status", aStatusCtrl.update.bind(aStatusCtrl));
//app.delete("/api/pocketScrum/status", aStatusCtrl.delete.bind(aStatusCtrl));
//
//app.post('/api/pocketScrum/members', aTeamMemberCtrl.create.bind(aTeamMemberCtrl));
//app.get("/api/pocketScrum/members", aTeamMemberCtrl.read.bind(aTeamMemberCtrl));
//app.put("/api/pocketScrum/members", aTeamMemberCtrl.update.bind(aTeamMemberCtrl));
//app.delete("/api/pocketScrum/members", aTeamMemberCtrl.delete.bind(aTeamMemberCtrl));
//
//app.post('/api/pocketScrum/stories', aUserStoryCtrl.create.bind(aUserStoryCtrl));
//app.get("/api/pocketScrum/stories", aUserStoryCtrl.read.bind(aUserStoryCtrl));
//app.put("/api/pocketScrum/stories", aUserStoryCtrl.update.bind(aUserStoryCtrl));
//app.delete("/api/pocketScrum/stories", aUserStoryCtrl.delete.bind(aUserStoryCtrl));
//
//app.post('/api/pocketScrum/features', aFeatureCtrl.create.bind(aFeatureCtrl));
//app.get("/api/pocketScrum/features", aFeatureCtrl.read.bind(aFeatureCtrl));
//app.put("/api/pocketScrum/features", aFeatureCtrl.update.bind(aFeatureCtrl));
//app.delete("/api/pocketScrum/features", aFeatureCtrl.delete.bind(aFeatureCtrl));
//
//app.post('/api/pocketScrum/projects', aProjectCtrl.create.bind(aProjectCtrl));
//app.get("/api/pocketScrum/projects", aProjectCtrl.read.bind(aProjectCtrl));
//app.put("/api/pocketScrum/projects", aProjectCtrl.update.bind(aProjectCtrl));
//app.delete("/api/pocketScrum/projects", aProjectCtrl.delete.bind(aProjectCtrl));
//
//
//
//var mongoose = require('mongoose');
//var mongoUri = 'mongodb://localhost:27017/pocketScrum';
//console.log("mongoUri", mongoUri);
//mongoose.set('debug', true);
//mongoose.connect(mongoUri);
//mongoose.connection.once('open', function() {
//    console.log('connected to mongoDB at: ', mongoUri);
//});

var server = app.listen(8081, function() {
    console.log("Listening at address", server.address());
});
