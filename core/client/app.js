
//console.log('app loaded');
var lodash = require('lodash');
require('angular-simple-logger');
require('angular-google-maps');

import jQuery from 'jquery';
import bootstrap from 'bootstrap';
// import 'font-awesome/css/font-awesome.css';
import 'animate.css/animate.css'
import 'hover.css/css/hover.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import './app.scss';


import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
// import ngDialog from 'ng-dialog';
import ngFileUpload from 'ng-file-upload';

import goClick from './directives/goClick.directive';

import home from './features/home';
import stylists from './features/stylists';
import salon from './features/salon';
import tanning from './features/tanning';
import artists from './features/artists';
import arts from './features/arts';
import events from './features/events';
import cart from './features/cart';

 


// Dear teammates: this controller would serve the only purpose of making the function $scope.isLoggedIn
// globally available in all controllers, so we can use ng-show/ng-hide on elements that only
// the owner should see
// app.controller('checkAdminController', function ($scope, $http, $rootScope) {
//     $scope.isLoggedIn = function () {
//         $http.get('/checklogin')
//             .success(function (data) {
//                 console.log(data);
//                 $rootScope.loggedIn = data;
//             })
//             .error(function (data) {
//                 console.log('error: ' + data);
//             });
//     };
// });



var app = angular.module('app', [uiRouter, ngMaterial, ngFileUpload, goClick, home, stylists, salon, tanning, artists, arts, events, cart, 'uiGmapgoogle-maps']);




require('./routes')(app);

// the contacts page feature
require('./features/contact/')(app);


