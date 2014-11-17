app.controller('debugController', function($scope,$window,$rootScope,apiService){

		$rootScope.debug = false;
		$scope.test = "test";

		apiService.get('settings').then(function(settings) {
			$scope.debugSettings = settings;
		});

		$scope.toggleDebug = function(){
			if ($rootScope.debug == false) {
				$rootScope.debug = true;
				return;
			}
			$rootScope.debug = false;
		}

	})