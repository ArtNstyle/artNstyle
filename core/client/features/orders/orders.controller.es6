//import BaseWebController from "../commonControllers/baseWeb.controller"

export default class ordersController {
    constructor(ordersService, loggedUserService, $state) {
        this.test = 'Hello from ordersController';
        this.ordersService = ordersService;

        this.getItems();
        this.testItemCount = 1;

        this.authenticated = false;
        loggedUserService.isAuthenticated().then((status) => {
            this.authenticated = status;
            //console.log("ordersController", this.authenticated);
            if(!this.authenticated) {
                $state.go('home');
            }
        });


    }

    getItems() {
        this.items = this.ordersService.getItems();
    }

    deleteItem(item) {
        this.ordersService.deleteItem(item);
        this.getItems();
    }

}


