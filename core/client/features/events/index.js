import '../events/events.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';
import editableText from '../../directives/editableText.directive';
import editableItem from '../../directives/editableItem.directive';
import addItem from '../../directives/addItem.directive';

import event from '../events/event.directive';

import baseWeb from '../../services/baseWeb.service';
import picsService from '../../services/pics.service';


import eventsController from '../events/events.controller.es6';

export default angular.module('app.events', [mainMenu, event, editableText, editableItem, addItem, baseWeb, picsService])
    .controller('eventsController', eventsController)
    .name;

