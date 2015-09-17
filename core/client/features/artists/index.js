import '../artists/artists.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import artistsController from '../artists/artists.controller.es6';

export default angular.module('app.artists', [mainMenu])
    .controller('artistsController', artistsController)
    .name;

