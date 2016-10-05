(function () {
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
			.state('categories', {
				url: '/categories',
				templateUrl: 'src/app/templates/categories.template.html',
				controller: 'CategoriesController as categoriesList',
				resolve: {
					categories: ['MenuDataService', function (MenuDataService) {
						return MenuDataService.getAllCategories();
					}]
				}
			});
	}
})();