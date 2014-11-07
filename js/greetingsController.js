(function(){

	var app = angular.module('greetingsApp', ['ngRoute']);


	app.controller('greetingsController', ['$scope','$log','$http', function ($scope, $log, $http) {
		
			$http.get('/js/greetings.json')
				.success(function(data){
					$scope.greetings = data;
				});

	}]);

})();
