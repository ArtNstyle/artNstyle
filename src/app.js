import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import stylists from './features/stylists';
import events from './features/events';

angular.module('app', [uirouter, home, stylists, events])
  .config(routing);
