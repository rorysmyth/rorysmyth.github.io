app.controller('numbersController', function($scope, $log, ipsumService, apiService){
	
	apiService.get('numbers').then(function(numbers) {
		$scope.numbers = numbers;
	});

	$scope.ipsum = ipsumService.ipsum;

	$scope.add = function(number){
		$scope.numbers.push({
			"id":2,
			"name":"New York Office",
			"number":"+1 555 666 777",
			"locale":"us",
			"brand":1,
			"recordCalls": true,
			"callerId":0,
			"fallover":1,
			"wallGreeting":1,
			"holdGreeting":1,
			"voicemail":true,
			"transcribeVoicemail":true,
			"voicemailDeletion":5,
			"voicemailGreeting":1,
			"outOfHoursGreeting":2,
			"businessHoursGreeting":2,
			"noVoicemailAvailableGreeting":2,
			"ivr":null,
			"groupRouting":[]
		})
	}

})