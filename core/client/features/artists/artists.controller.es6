import BaseWebController from "../commonControllers/baseWeb.controller"

export default class artistsController extends BaseWebController {
  constructor($location, artistsService, picsService, loggedUserService, $state) {
    super($location, artistsService, picsService, loggedUserService);
    this.test = 'Hello from artistsController';
    this.$state = $state;
  }

  gotoArtist(artist) {
    this.$state.go('arts', {artistId: artist._id});
  }

}

//StylistsController.$inject = ['randomNames'];
//artistsController.$inject = ['randomNames'];
