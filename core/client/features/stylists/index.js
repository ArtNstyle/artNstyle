import '../stylists/stylists.scss';

import editable from '../../directives/editable.directive';
import addItem from '../../directives/addItem.directive';
import stylist from '../stylists/stylist.directive';

import baseWeb from '../../services/baseWeb.service';

import stylistsController from '../stylists/stylists.controller.es6';

export default angular.module('app.stylists', [stylist, editable, addItem, baseWeb])
    .controller('stylistsController', stylistsController)
    .name;
