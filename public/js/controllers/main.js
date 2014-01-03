// <div ng-controller="Main">
app.controller('Main', ['$scope', function ($scope) {

	$scope.setActivePage = function (activePage) {
		$scope.activePage = activePage;
	}

}]);