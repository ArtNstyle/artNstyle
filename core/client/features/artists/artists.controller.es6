import BaseWebController from "../commonControllers/baseWeb.controller"

export default class artistsController extends BaseWebController {
  constructor($location, artistsService, picsService) {
    super($location, artistsService, picsService);
    this.test = 'Hello from artistsController';
  }

  getItems() {
    this.artistsService.getItems().then((data) => {
      this.artists = data;
      //console.log("this.artists", this.artists);
    });
  }

  saveItem(artist) {
    return this.artistsService.saveItem(artist);
  }

  deleteItem(artist) {
    return this.artistsService.deleteItem(artist).then((response)=> {
      this.getItems();
    });
  }

  addItem(artist) {
    return this.artistsService.addItem(artist).then((response)=> {
      this.getItems();
    });
  }

}

//StylistsController.$inject = ['randomNames'];
//artistsController.$inject = ['randomNames'];
