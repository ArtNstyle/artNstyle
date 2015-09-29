export default class tanningCtrl {
	constructor(cartService) {
               (function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.25;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "100% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();
        
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


