app.directive('ivrNestedCapsules', function(){

		var v1 = "/js/ivr/directives/templates/ivr-nested-capsules.html";
		var v2 = "/js/ivr/directives/templates/ivr-nested-capsules-smaller.html";
		var v3 = "/js/ivr/directives/templates/ivr-nested-capsules-focus.html";
		var v4 = "/js/ivr/directives/templates/ivr-table.html";
		
		return {

			restrict: 'E',
			templateUrl: v2,

			controller: function($log,$scope,$http,apiService,ipsumService){
				
				$scope.ipsum = ipsumService.ipsum;
				
				apiService.get('ivr').then(function(ivr) {
					$scope.ivrMenus = ivr;
				});

				$scope.activeCapsule = 0;


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