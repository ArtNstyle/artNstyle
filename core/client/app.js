
//console.log('app loaded');

import jQuery from 'jquery';
import bootstrap from 'bootstrap'; 
// import 'font-awesome/css/font-awesome.css';  
import 'animate.css/animate.css'
// import 'wow/'
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import './app.scss';




import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngFileUpload from 'ng-file-upload';



import goClick from './directives/goClick.directive';

import home from './features/home';
import stylists from './features/stylists';
import salon from './features/salon';
import tanning from './features/tanning';
import artists from './features/artists';
import events from './features/events';

var app = angular.module('app', [uiRouter, ngMaterial, ngFileUpload, goClick, home, stylists, salon, tanning, artists, events]);  //



require('./routes')(app);


