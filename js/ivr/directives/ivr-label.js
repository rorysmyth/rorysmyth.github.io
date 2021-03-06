app.directive('ivrLabel', function(){

		return {

			restrict: 'E',
			templateUrl: '/js/ivr/directives/templates/ivr-label.html',
			controller: function($log,$scope,$rootScope,$http,ipsumService,apiService){

				apiService.get('ivr').then(function(ivr) {
					$scope.ivrMenus = ivr;
				});

				$scope.ipsum = ipsumService.ipsum;
				$scope.activeCapsule = null;
				$scope.activeTab = null;
				$scope.editingRoute = false;
				$scope.dropDown = false;

				$scope.setActive =  function(capsule){

					$scope.activeIvrMenu = $scope.ivrMenus[capsule].ivr[0]

					if ($scope.activeCapsule === capsule) {
						$scope.activeCapsule = null;
						return;
					};
					$scope.activeCapsule = capsule;

				}

				$scope.resetDropdown = function(){
					$scope.dropDown = false;
				}

				$scope.toggleDropdown = function(){
					if (!$scope.dropDown) {
						$scope.dropDown = true;
					} else {
						$scope.dropDown = false;
					}
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


				$scope.setIvrMenu = function(ivr){
					$scope.activeIvrMenu = ivr;
				}

				$scope.isActiveIvrMenu = function(ivr){
					return $scope.activeIvrMenu === ivr;
				}

			}
		};

	});