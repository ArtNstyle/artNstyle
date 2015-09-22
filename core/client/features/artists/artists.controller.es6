<<<<<<< HEAD
export default class artistsController {
  constructor(artistsService) {
    this.test = 'Hello from artistsController';
    this.artistsService = artistsService;

    this.getItems();
    //console.log("artistsService", artistsService.names);
=======
import BaseWebController from "../commonControllers/baseWeb.controller"

export default class artistsController extends BaseWebController {
  constructor($location, artistsService, picsService) {
    super($location, artistsService, picsService);
    this.test = 'Hello from artistsController';
>>>>>>> 2506e1d5124547d7280585ca61aeec577bbf763c
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
<<<<<<< HEAD

//StylistsController.$inject = ['randomNames'];
=======
//artistsController.$inject = ['randomNames'];
>>>>>>> 2506e1d5124547d7280585ca61aeec577bbf763c
