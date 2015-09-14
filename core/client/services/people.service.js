module.exports = function (app) {
    app.service('peopleService', function () {
        this.people = ['Brian', 'John', 'Anne'];
    });
};