(function () {
	'use strict';

	angular.module('MenuApp')
		.component('categories', {
  			templateUrl: 'src/app/templates/categories.template.html',
  			bindings: {
    			categories: '<'
  			}
		});
})();