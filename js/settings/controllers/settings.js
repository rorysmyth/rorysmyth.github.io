app.controller('settingsController', function($scope, $log, ipsumService,apiService){
	
	$scope.ipsum = ipsumService.ipsum;
	
	apiService.get('settings').then(function(settings) {
		$scope.settings = settings;
	});

})