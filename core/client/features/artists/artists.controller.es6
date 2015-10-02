import BaseWebController from "../commonControllers/baseWeb.controller"

export default class artistsController extends BaseWebController {
  constructor($location, artistsService, picsService, loggedUserService, $state, artsService) {
    super($location, artistsService, picsService, loggedUserService);
    this.test = 'Hello from artistsController';
    this.$state = $state;
    this.artsService = artsService;
  }

  gotoArtist(artist) {
    this.$state.go('arts', {artistId: artist._id});
  }

  deleteArts(artist) {
    var artsQuery = "?artistId=" + artist._id;
    //console.log("artistsController: deleteArts", artsQuery);
    return this.artsService.getItems(artsQuery).then((arts) => {
        //console.log("artistsController: deleteArts", arts);
        for(var i = 0; i < arts.length; i++) {
          this.artsService.deleteItem(arts[i]);
        }
        return;
    });

  }

  deleteItem(artist) {
    this.deleteArts(artist).then((response) => {
      super.deleteItem(artist);
    })
  }

}

//artistsController.$inject = ['randomNames'];
