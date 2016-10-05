(function () {
	'use strict';
	
	angular.module('MenuApp')
		.component('menuItems', {
			templateUrl: 'src/app/templates/menuitems.template.html',
			bindings: {
				items: '<'
			}
		});
})();