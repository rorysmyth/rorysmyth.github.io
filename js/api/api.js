app.factory('apiService', function($q, $http, $timeout){

	return {
		get: function get(resource){
			var defer = $q.defer();
			$timeout(function(){
				$http
					.get("/js/api/"+resource+".json")
					.then(function(response){
						defer.resolve(response.data)
					});
			},30)
			return defer.promise;
		}
	};

})