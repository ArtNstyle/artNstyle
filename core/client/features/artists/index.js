import '../artists/artists.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';
import editableText from '../../directives/editableText.directive';
import addItem from '../../directives/addItem.directive';

import artist from '../artists/artist.directive';

import baseWeb from '../../services/baseWeb.service';
import loggedUserService from '../../services/loggedUser.service';


import artistsController from '../artists/artists.controller.es6';

export default angular.module('app.artists', [mainMenu, artist, editableText, addItem, baseWeb, loggedUserService])
    .controller('artistsController', artistsController)
    .name;

