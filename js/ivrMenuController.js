(function(){
	
	var menus = [
		{
			name: "English general menu",
			ivr: [
				{
					name: "Main menu",
					greeting: "Customer care greeting",
					routes: [
						{
							id: 1,
							keypress: 1,
							action: "number",
							value: "+1 415 9953"
						},
						{
							id: 2,
							keypress: 2,
							action: "number",
							value: "+1 415 9953"
						},
						{
							id: 3,
							keypress: 4,
							action: "number",
							value: "+1 415 9953"
						}
					],
				},
				{
					name: "Tech support menu",
					greeting: "tech support greeting",
					routes: [
						{
							id: 1,
							keypress: 3,
							action: "number",
							value: "+1 415 9953"
						},
					],
				},
			],
		},
		{
			name: "French general menu",
			ivr: [{
				name: "Customer care",
				greeting: "Customer care greeting",
				routes: [{
					id: 1,
					keypress: 2,
					action: "number",
					value: "+1 415 9953"
				}],
			}],
		},
		{
			name: "German general menu",
			ivr: [{
				name: "Customer care",
				greeting: "Customer care greeting",
				routes: [{
					id: 1,
					keypress: 2,
					action: "number",
					value: "+1 415 9953"
				}],
			}],
		},
	];

	var app = angular.module('ivrApp', ['ngRoute']);


	app.directive('ivrMenus', function(){
		var data = menus;
		return {
			restrict: 'E',
			templateUrl: 'templates/ivr-menu.html',
			controller: function($log){
				
				this.menus = data;
				this.activeCapsule = null;

				this.setActive =  function(capsule){

					if (this.activeCapsule === capsule) {
						this.activeCapsule = null;
						return;
					};
					this.activeCapsule = capsule;

				}
				this.isActive = function(capsule){
					return this.activeCapsule === capsule;
				}

			},
			controllerAs: 'ivrMenuCtrl'
		};
	});

	app.controller('routeController', function($log){

		this.activeRoute = null;
		this.setActive = function(route){

			if (this.activeRoute === route) {
				this.activeRoute = null;
				return;
			};

			this.activeRoute = route;

		};
		this.isActive = function(route){
			return this.activeRoute === route;
		};
		this.test = function(route){
			route.action = "testing this thing"
		};
	});

	app.controller('savingController', function($scope,$log,$timeout){
		
		$scope.saving = false;
		$scope.changed = false;
		$scope.input = "default value";
		$scope.saved = false;
		$scope.growl = false;
		$scope.capsule = true;

		$scope.capsuleOpen = function(){
			return $scope.capsule === true;
		}

		$scope.closeCapsule = function(){
			$scope.capsule == false;
		}

		$scope.changeMade = function(){
			return $scope.changed === true;
		}

		$scope.makeChange = function(val){
			switch	(val){
				case 0:
					$scope.changed = false;
					break;
				case 1:
					$scope.changed = true;
					break;
			}
		}

		$scope.revertChanges = function(){
			if ($scope.saved) {
				$scope.input = $scope.input;
			} else {
				$scope.input = "default value";
			}
			$scope.changed = false;
			$scope.saved = false;
		}

		$scope.lapClean = function(){
			$scope.changed = false;
			$scope.saved = true;
		}

		$scope.activeGrowl = function(){
			return $scope.growl === true;
		}

		$scope.setSave = function(state){
			if (state == 1 && $scope.changed == true) {
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
		}

		$scope.isSaving = function(){
			if ($scope.saving == true) {
				return true;
			};
		}

		$scope.isSaved = function(){
			return $scope.saved === true;
		}

	});

})();