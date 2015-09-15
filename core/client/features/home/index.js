import '../home/home.scss';

import angular from 'angular';

import homeController from '../home/home.controller.es6';

export default angular.module('app.home', [])
    .controller('homeController', homeController)
    .name;


