app.controller('greetingsController', function($scope, $log, ipsumService){
	$scope.ipsum = ipsumService.ipsum;
	$scope.toggleNumber = function(){
		$log.log("this")
	}
})