(function () {
	'use strict';
	
	angular.module('MenuApp')
		.component('menuItems', {
			templateUrl: 'src/app/templates/main-menuitems.template.html',
			bindings: {
				items: '<'
			}
		});
})();