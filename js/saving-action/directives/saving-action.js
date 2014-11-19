app.directive('savingAction', function(){
	return {
		restrict: 'E',
		templateUrl: '/js/saving-action/directives/templates/saving-action.html',
		controller: function($log, $timeout, $scope){
			
			$scope.saving = false;
			$scope.changed = false;
			$scope.input = "default value";
			$scope.saved = false;
			$scope.growl = false;
			$scope.capsule = true;

			$scope.capsuleOpen = function(){
				return $scope.capsule === true;
			};

			$scope.closeCapsule = function(){
				$scope.capsule = false;
			};

			$scope.changeMade = function(){
				return $scope.changed === true;
			};

			$scope.makeChange = function(val){
				switch	(val){
					case 0:
						$scope.changed = false;
						break;
					case 1:
						$scope.changed = true;
						break;
				}
			};

			$scope.revertChanges = function(){
				if ($scope.saved) {
					$scope.input = $scope.input;
				} else {
					$scope.input = "default value";
				}
				$scope.changed = false;
				$scope.saved = false;
			};

			$scope.lapClean = function(){
				$scope.changed = false;
				$scope.saved = true;
			};

			$scope.activeGrowl = function(){
				return $scope.growl === true;
			};

			$scope.setSave = function(state){
				if (state === 1 && $scope.changed) {
					$scope.saving = true;
					$timeout(function(){
						$scope.saving = false;
						$scope.saved = true;
						$scope.lapClean();
					},2000);
					$timeout(function(){
						$scope.growl = true;
						$scope.capsule = false;
					},2500);
					$timeout(function(){
						$scope.growl = false;
					},4500);
				} else {
					$scope.saving = false;
				}
			};

			$scope.isSaving = function(){
				if ($scope.saving) {
					return true;
				}
			};

			$scope.isSaved = function(){
				return $scope.saved === true;
			};

		}
	};
});

	

