export default class stylistsController {
    constructor(stylistsService) {
        this.test = 'Hello from StylistsController';
        this.stylistsService = stylistsService;

        this.getItems();
        console.log("stylistsService", stylistsService.names);

        this.editing = false;
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

}

//StylistsController.$inject = ['randomNames'];
