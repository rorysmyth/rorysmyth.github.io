app.directive('greetings', function(){
		
		return {

			restrict: 'E',
			templateUrl: '/js/greetings/directives/templates/greetings.html',
			controller: function($log,$scope,$http,apiService){

				$scope.activeCapsule = null;
				$scope.activeTab = null;
				
				apiService.get('greetings').then(function(greetings) {
					$scope.greetings = greetings;
				});

				$scope.setActive =  function(parentIndex, childIndex){
					var index = parentIndex + '' + childIndex;
					if ($scope.activeCapsule === index) {
						$scope.activeCapsule = null;
						return;
					};
					$scope.activeCapsule = index;
					$log.log($scope.activeCapsule)
				}
				$scope.isActive = function(parentIndex, childIndex){
					var index = parentIndex + '' + childIndex;
					return $scope.activeCapsule === index;
				}

			}
		};
	})