//console.log('app loaded');

import 'angular-material/angular-material.css';
import './app.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import goClick from './directives/goClick.directive';

import home from './features/home';
import stylists from './features/stylists';
import salon from './features/salon';
import tanning from './features/tanning';
import artists from './features/artists';
import events from './features/events';
import cart from './features/cart';


var app = angular.module('app', [uiRouter, ngMaterial,  goClick, home, stylists, salon, tanning, artists, events, cart]);  //



require('./routes')(app);


