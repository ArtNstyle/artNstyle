export default class tanningCtrl {
	constructor(cartService) {
		this.cartService = cartService;
		this.cartSupported = cartService.cartSupported;
		this.test = "tanningCtrl working";

		this.status = cartService.status;
	}

	addItemToCart(name, price) {
		this.cartService.addItem({
			name: name,
			price: price,
			amount: 1
		})
	}

	addSubscriptionToCart(planId, name, price) {
		this.cartService.addSubscription({
			planId: planId,
			name: name,
			price: price,
			amount: 1
		})
	}
}
