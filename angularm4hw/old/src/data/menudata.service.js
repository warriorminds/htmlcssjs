(function() {
	'use strict';

	angular.module('data')
		.service('MenuDataService', MenuDataService)
		.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

	MenuDataService.$inject = ['$http'];
	function MenuDataService($http) {
		var service = this;
		
		service.getAllCategories = function () {
			return $http({
				method: "GET",
				url: (ApiBasePath + '/categories.json')
			});
		};

		service.getItemsForCategory = function(categoryShortName) {
			return $http({
				method: "GET",
				url: (ApiBasePath + '/menu_items.json'),
				params: { category: categoryShortName }
			});
		};
	}
})();