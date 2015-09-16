export default class stylistsController {
    constructor(stylistsService) {
        this.test = 'Hello from StylistsController';
        this.stylistsService = stylistsService;

        this.getStylists();
        console.log("stylistsService", stylistsService.names);
    }

    getStylists() {
        this.stylistsService.getItems().then((data) => {
            this.stylists = data;
        });
    }

    saveItem(stylist) {
        //console.log("saveStylist", stylist)
        return this.stylistsService.saveItem(stylist);
    }
}

//StylistsController.$inject = ['randomNames'];
