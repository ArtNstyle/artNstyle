import '../contact/contact.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';


module.exports = function (app) {
    require('./contact.controller')(app);
    require('../../services/tickets.service.js')(app);
    require('../../services/loggedUserES5.service.js')(app);
};

