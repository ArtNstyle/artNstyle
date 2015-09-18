export default class artistsController {
  constructor(artistsService) {
    this.test = 'Hello from artistsController';
    this.artistsService = artistsService;

    this.getItems();
    //console.log("artistsService", artistsService.names);
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
