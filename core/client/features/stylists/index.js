import '../stylists/stylists.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';
import editableText from '../../directives/editableText.directive';
import addItem from '../../directives/addItem.directive';

import stylist from '../stylists/stylist.directive';

import baseWeb from '../../services/baseWeb.service';
import picsService from '../../services/pics.service';

import stylistsController from '../stylists/stylists.controller.es6';

export default angular.module('app.stylists', [mainMenu, stylist, editableText, addItem, baseWeb, picsService])
    .controller('stylistsController', stylistsController)
    .name;
