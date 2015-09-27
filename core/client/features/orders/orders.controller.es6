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
        this.ordersService.getItems().then((items) => {
                //console.log("ordersController: items", items)
                this.items = items;
        }, (err) => {
                console.log("ordersController: error getItems", err);
            }
        );
    }

    deleteItem(item) {
        this.ordersService.deleteItem(item).then((response) => {
            this.getItems();
        })
    }

}


