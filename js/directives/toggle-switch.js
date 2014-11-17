app.directive('toggleSwitch', function(){
	return {
		restrict: 'E',
		scope: {
			model: "=model",
			option: "=option"
		},
		template: "<div ng-click='toggleValue()' ng-class='{active:value === true}' class='radio-button'><span class='toggle'></span></div>",
		controller: function($scope,$log){

			$scope.value = $scope.model[$scope.option];

			$scope.toggleValue = function(){
				if ($scope.model[$scope.option] === false) {
					$scope.model[$scope.option] = true;
				} else {
					$scope.model[$scope.option] = false;
				}
			}

		}
	}
})