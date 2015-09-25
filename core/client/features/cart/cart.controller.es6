//import BaseWebController from "../commonControllers/baseWeb.controller"

export default class cartController {
    constructor(cartService) {
        this.test = 'Hello from cartController';
        this.cartService = cartService;

        this.getItems();
        this.testItemCount = 1;

    }

    getTotals() {
        this.subTotal = this.cartService.subTotal;
        this.taxTotal = this.cartService.taxTotal;
        this.total = this.cartService.total;
    }

    getItems() {
        this.items = this.cartService.getItems();
        this.getTotals();

    }

    deleteItem(item) {
        this.cartService.deleteItem(item);
        this.getItems();
    }


    addTestItem() {
        var newItem = {
            name: "test tannin package" + this.testItemCount + ", unlimeted",
            price: 20 + this.testItemCount,
        }

        this.cartService.addItem(newItem);

        this.getItems();
        this.testItemCount++;
    }

}


