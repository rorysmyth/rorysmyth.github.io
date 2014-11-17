app.controller('groupRoutingController', function($scope,$log,$http, apiService){
		
		apiService.get('numbers').then(function(numbers) {
			$scope.numbers = numbers;
		});

		$scope.isAttached = function(number, group){
			var id = group.id;
			return _.include(number.groupRouting, id)
		}

		$scope.toggleGroup = function(number, group){
		
			if(_.include(number.groupRouting, group.id)){
				number.groupRouting.splice(number.groupRouting.indexOf(group.id),1)
				return;
			}
			number.groupRouting.push(group.id)
		}

	})