app.controller('associatedNumbersController', function($scope,$log,$http, apiService){
		
		apiService.get('numbers').then(function(numbers) {
			$scope.numbers = numbers;
		});

		$scope.isAttached = function(container, number){
			return _.include(container, number.id)
		}

		$scope.toggleNumber = function(container, number){
			if(_.include(container, number.id)){
				$log.log();
				container.splice(container.indexOf(number.id),1)
				return;
			}
			container.push(number.id)
			$log.log(container)
		}

	})