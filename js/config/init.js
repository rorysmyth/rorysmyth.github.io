app.config(function($routeProvider,$resourceProvider) {
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
	.when('/numbers',{
		templateUrl: 'views/numbers.html',
		controller: 'numbersController'
	})
	.when('/greetings',{
		templateUrl: 'views/greetings.html',
		controller: 'greetingsController'
	})
	.when('/',{
		templateUrl: 'views/settings.html',
		controller: 'settingsController'
	})

})