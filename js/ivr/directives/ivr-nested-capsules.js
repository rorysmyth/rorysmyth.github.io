app.directive('ivrNestedCapsules', function(){
		
		return {

			restrict: 'E',
			templateUrl: '/js/ivr/directives/templates/ivr-nested-capsules.html',
			controller: function($log,$scope,$http,apiService,ipsumService){
				
				$scope.ipsum = ipsumService.ipsum;
				
				apiService.get('ivr').then(function(ivr) {
					$scope.ivrMenus = ivr;
				});

				$scope.activeCapsule = null;

				$scope.setActive =  function(capsule){

					if ($scope.activeCapsule === capsule) {
						$scope.activeCapsule = null;
						return;
					};
					$scope.activeCapsule = capsule;

				}
				$scope.isActive = function(capsule){
					return $scope.activeCapsule === capsule;
				}

			}
		};
	})