import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import stylists from './features/stylists';
// import events from './features/events';
import artists from './features/artists';
import salon from './features/salon';



angular.module('app', [uirouter, home, stylists, artists, salon])
  .config(routing);
