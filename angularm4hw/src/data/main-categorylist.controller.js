(function () {
	'use strict';
	console.log('controller init');
	angular.module('MenuApp')
		.controller('MainCategoryListController', MainCategoryListController);

	MainCategoryListController.$inject = ['MenuDataService', 'items'];
	function MainCategoryListController (MenuDataService, items) {
		var mainList = this;
		console.log(items);
		mainList.items = items.data;
	}
})();