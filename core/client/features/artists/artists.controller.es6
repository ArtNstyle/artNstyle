import BaseWebController from "../commonControllers/baseWeb.controller"

export default class artistsController extends BaseWebController {
  constructor($location, artistsService, picsService, $state) {
    super($location, artistsService, picsService);
    this.test = 'Hello from artistsController';
    this.$state = $state;
  }

  gotoArtist(artist) {
    this.$state.go('arts', {artistId: artist._id});
  }
}
//artistsController.$inject = ['randomNames'];
