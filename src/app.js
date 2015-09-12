import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import './app.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import routing from './app.config';
import home from './features/home';
import stylists from './features/stylists';
import events from './features/events';

import goClick    from './directives/goClick.directive';

angular.module('app', [uirouter, ngMaterial, home, stylists, events, goClick])
  .config(routing);
