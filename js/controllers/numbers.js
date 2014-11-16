app.controller('numbersController', function($scope, $log, ipsumService){
	$scope.ipsum = ipsumService.ipsum;
})