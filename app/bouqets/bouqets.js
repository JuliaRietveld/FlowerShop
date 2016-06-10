'use strict';

angular.module('myStore.bouqets', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/bouqets', {
	    templateUrl: 'bouqets/bouqets.html',
	    controller: 'myStoreCtrl'
	  }).
  	when('/bouqets/:bouqetId', {
	    templateUrl: 'bouqets/bouqet-detail.html',
	    controller: 'myStoreDetailCtrl'
	  })
}])

.controller('myStoreCtrl', ['$scope', '$http',function($scope, $http) {
	$http.get('json/bouqets.json')
	.success(function(data) {
		$scope.bouqets = data;
	})
}])

.controller('myStoreDetailCtrl', ['$scope', 
								  '$http',
								  '$routeParams',
								  '$filter',
								   function(
								   	$scope, 
								   	$http,
								   	$routeParams,
								   	$filter) {
	var bouqetId = $routeParams.bouqetId;
	$http.get('json/bouqets.json')
		.success(function(data) {
			$scope.bouqet = $filter('filter')(data, function(d){
				return d.id == bouqetId;
			})[0];
			$scope.MainImage = $scope.bouqet.images[0].name;
		});
		$scope.setImage = function(image) {
			$scope.MainImage = image.name;
		}
}]);	

