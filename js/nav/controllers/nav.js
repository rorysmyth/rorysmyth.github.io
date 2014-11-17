app.controller('navController', function($scope, $location, $route, $routeParams){
		
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;

		$scope.changePage = function(page){
			$location.path(page)
		}

		$scope.isActive = function(url){
			return $scope.$location.path() === url;
		}

	})