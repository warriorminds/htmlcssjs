(function() {
	"use strict";

	angular.module('public')
	.controller('SignUpController', SignUpController);

	SignUpController.$inject = ['MenuService'];
	function SignUpController(MenuService) {
		var signUpCtrl = this;

		signUpCtrl.submit = function() {
			console.log("fav dish");
			console.log(signUpCtrl.user.favoriteDish);
			MenuService.getShortName(signUpCtrl.user.shortName).then(function (response) {
				MenuService.setUser(signUpCtrl.user);
				if (response.data === undefined) {
					signUpCtrl.completed = false;
					signUpCtrl.error = true;
				} else {
					signUpCtrl.user.favoriteDish = response.data;
					signUpCtrl.completed = true;
					signUpCtrl.error = false;
				}
			}, function (response) {
				signUpCtrl.completed = false;
				signUpCtrl.error = true;
			});
		}
	}
})();