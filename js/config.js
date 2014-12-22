app.config(function($routeProvider,$resourceProvider) {
	$routeProvider
	.when('/ivr',{
		templateUrl: '/js/ivr/views/ivr.html',
		// controller:'ivrController'
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