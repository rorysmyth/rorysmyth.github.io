app.config(function($routeProvider,$resourceProvider) {
	$routeProvider
	.when('/ivr',{
		templateUrl: '/js/ivr/views/ivr-nested-capsules.html',
	})
	.when('/ivr/dropdown',{
		templateUrl: '/js/ivr/views/ivr-dropdown.html',
		controller:'ivrMenuController'
	})
	.when('/ivr/list',{
		templateUrl: '/js/ivr/views/ivr-list.html',
		controller:'ivrMenuController'
	})
	.when('/ivr/label',{
		templateUrl: '/js/ivr/views/ivr-label.html',
		controller:'ivrMenuController'
	})
	.when('/settings',{
		templateUrl: '/js/settings/views/settings.html',
		controller: 'settingsController'
	})
	.when('/numbers',{
		templateUrl: '/js/numbers/views/numbers.html',
		controller: 'numbersController'
	})
	.when('/greetings',{
		templateUrl: '/js/greetings/views/greetings.html',
		controller: 'greetingsController'
	})
	.when('/saving',{
		templateUrl: '/js/saving-action/views/saving-action.html',
		controller: 'savingActionController'
	})
	.when('/',{
		templateUrl: '/js/settings/views/settings.html',
		controller: 'settingsController'
	})

})