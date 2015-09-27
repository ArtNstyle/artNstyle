export default class ordersController {
    constructor(ordersService, loggedUserService, $state) {
        this.test = 'Hello from ordersController';
        this.ordersService = ordersService;

        this.items = [];
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

    countTotals() {
        function countItems(items) {
            var count = 0;
            for(var i = 0; i < items.length; i++) {
                if(items[i].type === "item") {
                    ++count;
                }
            }
            return count;
        }

        this.total = this.items.length;
        this.itemsTotal = countItems(this.items);
        this.subscriptionsTotal = this.total - this.itemsTotal;
    }

    getItems() {
        this.ordersService.getItems().then((items) => {
                //console.log("ordersController: items", items)
                this.items = items;
                this.countTotals();
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

    saveItem(item) {
        this.ordersService.saveItem(item).then((response) => {
            this.getItems();
        })
    }

}


