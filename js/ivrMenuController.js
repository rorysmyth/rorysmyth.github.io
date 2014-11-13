(function(){
	
	var app = angular.module('voiceAdmin', ['ngRoute','truncate'])


	.factory('ipsumService', function(){
		return {
        	ipsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id pharetra elit, et suscipit odio. Maecenas non ultrices sem, id aliquet sapien. Proin est erat, fermentum a quam sit amet, ultrices pellentesque felis. Aliquam fermentum risus risus, sed facilisis magna aliquet id. Etiam at augue felis. Nunc dignissim ipsum et ligula malesuada, vitae accumsan nisi vulputate. Vestibulum vel dui lacus. Mauris sagittis nibh a ante mattis consectetur. Quisque aliquet arcu sit amet lobortis iaculis."
      	}; 
	})

	.config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/ivr',{
				templateUrl: 'views/ivr.html'
			})
			.when('/ivr/dropdown',{
				templateUrl: 'views/ivr-dropdown.html'
			})
			.when('/settings',{
				templateUrl: 'views/settings.html',
				controller: 'settingsController'
			})

	}])

	.controller('debugController', function($scope,$window,$rootScope){

		$rootScope.debug = false;
		$scope.toggleDebug = function(){
			if ($rootScope.debug == false) {
				$rootScope.debug = true;
				return;
			}
			$rootScope.debug = false;
		}

	})

	.controller('settingsController', function($scope, $log, ipsumService){
		$scope.ipsum = ipsumService.ipsum;
	})

	.directive('radioButton', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/dropdown.html',
			scope: {
				state: "@"
			},
			controller: function($log, $scope, $attrs, $location){
				$scope.state = $attrs.state;
			}
		};
	})

	.controller('devController', function($scope, ipsumService){
		$scope.ipsum = ipsumService.ipsum;
	})

	.controller('ivrMenuController', function($scope, $route, $routeParams, $location){
		
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;

		$scope.changeVersion = function(view){
			$location.path(view)
		}

		$scope.isActive = function(url){
			return $scope.$location.path() === url;
		}

	})

	.controller('routeController', function($scope,$log){

		$scope.activeRoute = null;
		$scope.setActive = function(route){

			if ($scope.activeRoute === route) {
				$scope.activeRoute = null;
				return;
			};

			$scope.activeRoute = route;

		};
		$scope.isActive = function(route){
			return $scope.activeRoute === route;
		};

	})

	.controller('associatedNumbersController', function($scope,$log,$http){
		
		$http.get('/js/numbers.json')
		.success(function(data){
			$scope.numbers = data;
		});

		$scope.isAttached = function(menuNumbers, numberId){
			return _.include(menuNumbers, numberId)
		}

		$scope.toggleNumber = function(menu, numberId){
			if(_.include(menu.numbers, numberId)){
				$log.log();
				menu.numbers.splice(menu.numbers.indexOf(numberId),1)
				return;
			}
			menu.numbers.push(numberId)
			$log.log(menu.numbers)
		}

	})

	.directive('ivrMenus', function(){
		
		return {

			restrict: 'E',
			templateUrl: 'templates/ivr-menu.html',
			controller: function($log,$scope,$http){
				
				$http.get('/js/ivr.json')
					.success(function(data){
						$scope.ivrMenus = data;
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

	.controller('navController', function($scope, $location, $route, $routeParams){
		
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;

		$scope.changePage = function(page){
			$location.path(page)
		}

		$scope.isActive = function(url){
			return $scope.$location.path() === url;
		}

	})

	.directive('ivrDropdown', ['ipsumService', function(ipsumService){

		return {

			restrict: 'E',
			templateUrl: 'templates/ivr-dropdown.html',
			controller: function($log,$scope,$http,ipsumService){
				
				$http.get('/js/ivr.json')
					.success(function(data){
						$scope.ivrMenus = data;
						$scope.ivrMenusJs = _(data).toArray();
					});


				$scope.ipsum = ipsumService.ipsum;
				$scope.activeCapsule = null;
				$scope.activeTab = 1;

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

	}]);




})();