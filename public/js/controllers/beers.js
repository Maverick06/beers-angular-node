app.controller('Beers', function ($scope, BeerService) {

	$scope.setActivePage('beers');

	BeerService.query(function (responseObject) {
		$scope.beers = responseObject;
	});

	var blankBeerObject = {
		name: 		'',
		brewer: 	'',
		style: 		'',
		alcohol: 	'',
		rating: 	'',
		area: 		''
	};

	$scope.addBeer = function () {

		BeerService.save($scope.newBeer, function (responseObject) {

			$scope.beers.push(responseObject);

			// by setting the model values to blank, 
			// it indirectly clears out the new beer form
			$scope.newBeer = blankBeerObject;

		})
	};

});