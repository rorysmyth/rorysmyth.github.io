app.directive('ivrDropdown', function(){

		return {

			restrict: 'E',
			templateUrl: '/js/ivr/directives/templates/ivr-dropdown.html',
			controller: function($log,$scope,$rootScope,$http,ipsumService,apiService){
				
				apiService.get('ivr').then(function(ivr) {
					$scope.ivrMenus = ivr;
				});

				$scope.ipsum = ipsumService.ipsum;
				$scope.activeCapsule = null;
				$scope.activeTab = 1;
				$scope.editingRoute = false;

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

				$scope.setTab = function(tab){
					$scope.activeTab = tab;
				}

				$scope.isActiveTab = function(tab){
					return $scope.activeTab === tab;
				}

			}
		};

	});