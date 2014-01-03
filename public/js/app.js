// app.js controls the main generic functions of the app such as routing

// <html ng-app="App">
// appServices is something we named generically
// it allows us access to get JSON services from the server
var app = angular.module('App', ['appServices']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', 
			{
				templateUrl: 'partials/beers.html',
				controller: 'Beers'
			})
		.when('/beers', 
			{
				templateUrl: 'partials/beers.html',
				controller: 'Beers'
			})
		.when('/beers/:beerCode',
			{
				templateUrl: 'partials/beer.html',
				controller: 'Beer'
			})		
		.when('/lorem', 
			{
				templateUrl: 'partials/lorem.html',
				controller: 'Lorem'
			})	
		.when('/ipsum', 
			{
				templateUrl: 'partials/ipsum.html',
				controller: 'Ipsum'
			})			
		.otherwise({
			redirectTo: '/beers'
		});
});