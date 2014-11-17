app.controller('ivrRouteController', function($scope,$log,$rootScope){

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

		$scope.editRouteModal = function(route){
			$rootScope.modal = {}
				$rootScope.modal.editing = true;
				$rootScope.modal.route = route;
		}

	})