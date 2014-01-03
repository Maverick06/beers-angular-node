app.controller('Beer', function ($scope, $routeParams, $location, BeerService) {

	$scope.setActivePage('beers');

	BeerService.get(

		{ beerCode: $routeParams.beerCode }, 

		function (responseObject) {
			$scope.beer 		= responseObject;
			$scope.updatedBeer 	= {};
			angular.copy($scope.beer, $scope.updatedBeer);
		}
	);

	$scope.updateBeer = function () {

		BeerService.save($scope.updatedBeer, function (responseObject) {
			$scope.beer = responseObject;
		});

	};

	$scope.deleteBeer = function () {

		BeerService.delete({
			beerCode: $routeParams.beerCode
		});
		
		$location.path('beers');

	};

});