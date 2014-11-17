app.controller('ivrMenuController', function(ipsumService, $log, $scope, $route, $routeParams, $location){
		
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;

		$scope.ipsum = ipsumService.ipsum;

		$scope.changeVersion = function(view){
			$location.path(view)
		}

		$scope.isActive = function(url){
			return $scope.$location.path() === url;
		}

	})