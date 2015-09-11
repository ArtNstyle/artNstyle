import './artists.css';

import angular from 'angular';

import ArtistsController from './artists.controller';

export default angular.module('app.artists', [])
    .controller('ArtistsController', ArtistsController)
    .name;

