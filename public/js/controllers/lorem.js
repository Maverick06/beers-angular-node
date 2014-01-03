// this is a child of the Main controller, 
// which is loaded in the div with the ng-view directive
// here you can access vars in the Main controller, 
// but that does not work vice versa
app.controller('Lorem', ['$scope', function ($scope) {

	// this is a method in the parent Main controller
	$scope.setActivePage('lorem');

}]);