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
import cart from './features/cart';

<<<<<<< HEAD

var app = angular.module('app', [uiRouter, ngMaterial,  goClick, home, stylists, salon, tanning, artists, events, cart]);  //
=======
var app = angular.module('app', [uiRouter, ngMaterial, ngFileUpload, goClick, home, stylists, salon, tanning, artists, events]);  //
>>>>>>> 673718da62ea58d38878f8acd00aa3837643f685



require('./routes')(app);


