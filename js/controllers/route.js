app.controller('routeController', function($scope,$log){

		$scope.activeRoute = null;
		$scope.setActive = function(route){

			if ($scope.activeRoute === route) {
				$scope.activeRoute = null;
				return;
			};

			$scope.activeRoute = route;

		};
		$scope.isActive = function(route){
			return $scope.activeRoute === route;
		};

	})