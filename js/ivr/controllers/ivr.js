app.controller('ivrController', function(ipsumService, $log, $scope, $route, $routeParams, $location){
	
	$scope.status = "hello"
	$scope.ipsum = ipsumService.ipsum;

	$scope.setStatus = function(val){
		$scope.status = val;
	}

	$scope.parentTest = function(){
		$log.log("hello child")
	}

})