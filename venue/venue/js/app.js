var app = angular.module('venueApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'html/home.html'
	})
	.when('/signin',{
		controller: 'signController',
		templateUrl: 'html/signin.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});