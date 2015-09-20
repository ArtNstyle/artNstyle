export default class stylistsController {
    constructor(stylistsService, picsService) {
        this.test = 'Hello from StylistsController';
        this.stylistsService = stylistsService;
        this.picsService = picsService;

        this.getItems();
        console.log("stylistsService", stylistsService.names);
    }

    getItems() {
        this.stylistsService.getItems().then((data) => {
            this.stylists = data;
        });
    }

    saveItem(stylist) {
        return this.stylistsService.saveItem(stylist);
    }

    deleteItem(stylist) {
        return this.stylistsService.deleteItem(stylist).then((response)=> {
            this.getItems();
        });
    }

    addItem(stylist) {
        return this.stylistsService.addItem(stylist).then((response)=> {
            this.getItems();
        });
    }

    addPic(stylist, pic) {
        this.errorMsg = "";
        this.currentPic = {};
        return this.picsService.addPic(pic)
            .then((response) => {
                this.currentPic = response.data;
                //console.log("stylistsController: addPic", this.currentPic);
                stylist.image = "http://localhost:5000/api/pics/thumbnail?id=" + this.currentPic.picId;
                this.saveItem(stylist).then((response)=> {
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
