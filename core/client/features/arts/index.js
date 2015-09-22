import '../arts/arts.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';
import editableText from '../../directives/editableText.directive';
import addItem from '../../directives/addItem.directive';

import art from '../arts/art.directive';

import baseWeb from '../../services/baseWeb.service';


import artsController from '../arts/arts.controller.es6';

export default angular.module('app.arts', [mainMenu, art, editableText, addItem, baseWeb])
    .controller('artsController', artsController)
    .name;

