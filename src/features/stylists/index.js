import './stylists.css';

import angular from 'angular';
require('angular-material');
import ngMaterial from 'angular-material';

import editable from '../../directives/editable.directive';
import stylist from './stylist.directive';
import StylistsController from './stylists.controller';

export default angular.module('app.stylists', [ngMaterial, stylist, editable])
    .controller('StylistsController', StylistsController)
    .name;

