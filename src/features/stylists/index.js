import './stylists.css';

import angular from 'angular';

import StylistsController from './stylists.controller';

export default angular.module('app.stylists', [])
    .controller('StylistsController', StylistsController)
    .name;

