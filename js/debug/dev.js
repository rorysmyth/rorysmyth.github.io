app.controller('devController', function($scope, ipsumService){
		$scope.ipsum = ipsumService.ipsum;
	})