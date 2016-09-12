(function() {
	'use strict';
	angular.module('LunchCheck', []).controller('LunchController', LunchController);
	LunchController.$inject = ['$scope'];

	function LunchController($scope) {
		$scope.lunch = "";
		$scope.message = "";
		$scope.checkLunch = function() {
			var elements = $scope.lunch.split(",");

			if (elements.length == 0 || $scope.lunch.trim() == "") {
				$scope.message = "Please enter data first.";
			} else if (elements.length <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		};
	};
})();