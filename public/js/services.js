angular.module('appServices', ['ngResource'])
	.factory('BeerService', function ($resource) {
		return $resource('/beers/:beerCode');
	});


