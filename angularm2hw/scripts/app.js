(function () {
	console.log("ifff");
	'use strict';
	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyShoppingController', ToBuyShoppingController)
		.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService) {
		console.log("to buy ctrl");

		var toBuy = this;

		toBuy.bought = function (index) {
			var item = ShoppingListCheckOffService.getToBuyItem(index);
			ShoppingListCheckOffService.addAlreadyBought(item.name, item.quantity);
			ShoppingListCheckOffService.deleteToBuy(index);
		};

		toBuy.items = ShoppingListCheckOffService.getToBuy();
	}

	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
		var alreadyBought = this;

		alreadyBought.addItem = function () {
			ShoppingListCheckOffService.addAlreadyBought(alreadyBought.name, alreadyBought.quantity);
		};

		alreadyBought.items = ShoppingListCheckOffService.getAlreadyBought();	
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuy = [
			{ name: "Cookies", quantity: 10 },
			{ name: "Water", quantity: 5 },
			{ name: "Milk", quantity: 2 },
			{ name: "Cake", quantity: 1 },
			{ name: "Chocolates", quantity: 5 }
		];

		var alreadyBought = [];

		// TO BUY METHODS
		service.addToBuy = function (name, quantity) {
			var item = {
				name: name,
				quantity: quantity
			};
			toBuy.push(item);
		};

		service.getToBuy = function() {
			return toBuy;
		};

		service.getToBuyItem = function(index) {
			return toBuy[index];
		};

		service.deleteToBuy = function(index) {
			toBuy.splice(index, 1);
		};

		// ALREADY BOUGHT METHODS
		service.addAlreadyBought = function (name, quantity) {
			var item = {
				name: name,
				quantity: quantity
			};
			alreadyBought.push(item);
		};

		service.getAlreadyBought = function() {
			return alreadyBought;
		};
	}
})();