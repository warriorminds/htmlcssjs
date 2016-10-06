(function () {
	'use strict';

	angular.module('MenuApp')
		.controller('MainCategoryListController', MainCategoryListController);

	MainCategoryListController.$inject = ['items'];
	function MainCategoryListController (items) {
		console.log(items);
		var mainList = this;
		mainList.items = items.data;
	}
})();