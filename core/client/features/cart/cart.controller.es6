//import BaseWebController from "../commonControllers/baseWeb.controller"

export default class cartController {
    constructor(cartService, ordersService, loggedUserService) {
        this.test = 'Hello from cartController';
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.orderSubmitted = false;

        this.getItemsAndSubscriptions();
        this.testItemCount = 1;

        this.orderSubmitted = this.cartService.orderSubmitted;

        this.authenticated = false;
        loggedUserService.isAuthenticated().then((status) => {
            this.authenticated = status;
        });
    }

    getTotals() {
        this.subTotal = this.cartService.subTotal;
        this.taxTotal = this.cartService.taxTotal;
        this.total = this.cartService.total;
    }

    getItemsAndSubscriptions() {
        this.items = this.cartService.getItems();
        this.subscriptions = this.cartService.getSubscriptions();
        this.getTotals();
    }

    deleteItem(item) {
        this.cartService.deleteItem(item);
        this.getItemsAndSubscriptions();
    }

    deleteSubscription(item) {
        this.cartService.deleteSubscription(item);
        this.getItemsAndSubscriptions();
    }

    submitOrder() {
        this.ordersService.addOrders(this.customerEmail, this.items, this.subscriptions);
        this.cartService.orderSubmitted = true;
        this.orderSubmitted = this.cartService.orderSubmitted;
    }


    addTestItem() {
        var newItem = {
            name: "test tanning item" + this.testItemCount + ", unlimited",
            price: 20 + this.testItemCount
        }

        this.cartService.addItem(newItem);

        this.getItemsAndSubscriptions();
        this.testItemCount++;
    }

    addTestSub() {
        var newItem = {
            name: "test tanning sub" + this.testItemCount + ", unlimited",
            price: 20 + this.testItemCount
        }

        this.cartService.addSubscription(newItem);

        this.getItemsAndSubscriptions();
        this.testItemCount++;
    }

}


