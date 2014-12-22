app.directive('ivrMenus', function(){

		return {

			restrict: 'E',
			templateUrl: '/js/ivr/directives/templates/ivr.html',
			controller: function($log,$scope,$rootScope,$http,ipsumService,apiService){

				apiService.get('ivr').then(function(ivr) {
					$scope.ivrMenus = ivr;
				});

				$scope.ipsum = ipsumService.ipsum;
				$scope.activeCapsule = null;
				$scope.activeTab = null;
				$scope.editingRoute = false;

				$scope.setActive =  function(capsule){

					$scope.activeIvrMenu = $scope.ivrMenus[capsule].ivr[0]

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


				$scope.setIvrMenu = function(ivr){
					$scope.activeIvrMenu = ivr;
				}

				$scope.isActiveIvrMenu = function(ivr){
					return $scope.activeIvrMenu === ivr;
				}

			}
		};

	});