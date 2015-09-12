import './stylists.css';

import angular from 'angular';
require('angular-material');
import ngMaterial from 'angular-material';

import StylistsController from './stylists.controller';

export default angular.module('app.stylists', [ngMaterial])
    .controller('StylistsController', StylistsController)
    .name;

