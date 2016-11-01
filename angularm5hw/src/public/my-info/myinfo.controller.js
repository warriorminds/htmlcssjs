(function () {
	"use strict";

	angular.module('public')
	.controller('MyInfoController', MyInfoController);

	MyInfoController.$inject = ['user'];
	function MyInfoController(user) {
		var myInfoCtrl = this;
		myInfoCtrl.user = user;
	}
})();