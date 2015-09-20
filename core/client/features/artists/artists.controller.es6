export default class artistsController {
  constructor(artistsService, picsService) {
    this.test = 'Hello from artistsController';
    this.artistsService = artistsService;
    this.picsService = picsService;

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

  addPic(artist, pic) {
    this.errorMsg = "";
    this.currentPic = {};
    return this.picsService.addPic(pic)
        .then((response) => {
          this.currentPic = response.data;
          //console.log("artistsController: addPic", this.currentPic);
          artist.image = "http://localhost:5000/api/pics/thumbnail?id=" + this.currentPic.picId;
          this.saveItem(artist).then((response)=> {
            this.getItems();
          });
        }, (error) => {
          if (error.status > 0) {
            console.log("addPic error", error);
            this.errorMsg = error.status + ': ' + error.statusText;
            //self.currentPic = {};
          }
        }, (evt) => {
          this.currentPic.progress = Math.min(100, parseInt(100.0 *
              evt.loaded / evt.total));
          //this.emitSetChange();
        });
  }

}

//StylistsController.$inject = ['randomNames'];
