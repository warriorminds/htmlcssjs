(function () {
	'use strict';

	angular.module('MenuApp')
		.component('categoryList', {
			templateUrl: 'src/app/templates/categorylist.template.html',
			bindings: {
				items: '<'
			}
		});
})();