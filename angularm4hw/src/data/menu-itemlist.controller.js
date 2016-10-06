(function () {
	'use strict';

	angular.module('MenuApp')
		.controller('MenuItemsListController', MenuItemsListController);

	MenuItemsListController.$inject = ['items', '$stateParams'];
	function MenuItemsListController(items, $stateParams) {
		var menuList = this;
		menuList.items = items.data.menu_items;
		menuList.name = $stateParams.name;
	}
})();