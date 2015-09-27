export default class tanningCtrl {
	constructor(cartService) {
		this.cartService = cartService;
		this.cartSupported = cartService.cartSupported;
		this.test = "tanningCtrl working";
	}

	addItemToCart(name, price) {
		this.cartService.addItem({
			name: name,
			price: price,
			amount: 1
		})
	}

	addSubscriptionToCart(name, price) {
		this.cartService.addSubscription({
			name: name,
			price: price,
			amount: 1
		})
	}
}
