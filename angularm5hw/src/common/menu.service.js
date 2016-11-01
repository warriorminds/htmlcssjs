(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.user = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.setUser = function (user) {
    service.user = user;
  }

  service.getUser = function () {
    return service.user;
  }

  service.getShortName = function (shortName) {
    console.log(ApiPath + '/menu_items/' + shortName + '.json');
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json');
  }

}

})();
