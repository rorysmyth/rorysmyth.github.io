app.directive('numbers', function(){
		
		return {

			restrict: 'E',
			templateUrl: '/js/numbers/directives/templates/numbers.html',
			controller: function($log,$scope,$http,apiService){

				$scope.activeCapsule = null;
				$scope.activeTab = 1;
				
				apiService.get('numbers').then(function(numbers) {
					$scope.numbers = numbers;
				});

				apiService.get('brands').then(function(brands) {
					$scope.brands = brands;
				});

				apiService.get('greetings').then(function(greetings) {
					$scope.greetings = greetings;
				});

				apiService.get('months').then(function(months) {
					$scope.months = months;
				});

				apiService.get('groups').then(function(groups) {
					$scope.groups = groups;
				});

				apiService.get('ivr').then(function(ivr) {
					$scope.ivrs = ivr;
				});

				$scope.toggleIvr = function(number){
					if (number.ivr === true) {
						number.ivr = false;
					} else {
						number.ivr = true;
					}
				}

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
	})