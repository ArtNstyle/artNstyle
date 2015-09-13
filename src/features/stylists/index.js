import './stylists.css';

import angular from 'angular';
require('angular-material');
import ngMaterial from 'angular-material';

import stylist from './stylist.directive';
import StylistsController from './stylists.controller';

export default angular.module('app.stylists', [ngMaterial, stylist])
    .controller('StylistsController', StylistsController)
    .name;

