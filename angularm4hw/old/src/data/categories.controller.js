(function() {
	'use strict';

	angular.module('data').controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['MenuDataService', 'categories'];
	function CategoriesController(MenuDataService, categories) {
		var categoriesList = this;

		 categories.then(function(data) {
		 	categoriesList.categories = data.data;
		 }).catch(function(error) {
		 	console.log('Error: ', error);
		 });
	}
})();