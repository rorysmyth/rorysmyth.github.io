app.controller('settingsController', function($scope, $log, ipsumService,apiService){
	
	$scope.ipsum = ipsumService.ipsum;
	
	apiService.get('settings').then(function(settings) {
		$scope.settings = settings;
	});

	$scope.toggleValue = function(item){
		
		if ($scope.settings[item]) {
			$scope.settings[item] = false;
			return;
		}
		$scope.settings[item] = true;
	}

})