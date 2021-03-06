(function() {
	'use strict';

	angular.module('MenuApp').config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'src/app/templates/home.template.html'
			})
			.state('mainList', {
				url: '/main-list',
				templateUrl: 'src/app/templates/main-categorylist.template.html',
				controller: 'MainCategoryListController as mainList',
				resolve: {
					items: ['MenuDataService', function (MenuDataService) {
						return MenuDataService.getItems();
					}]
				}
			})
			.state('mainList.itemDetail', {
				url: '/item-detail/{name}/{categoryId}',
				templateUrl: 'src/app/templates/menuitems.template.html',
				controller: 'MenuItemsListController as menuList',
				resolve: {
					items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
						return MenuDataService.getItemsForCategory($stateParams.categoryId);
					}]
				}
			});
	}
})();