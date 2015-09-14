module.exports = function (app) {
    require('./home.controller')(app);
    require('../../services/people.service.js')(app);
};