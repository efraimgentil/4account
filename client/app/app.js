

var app = angular.module("app", ["ngRoute"]);

app.config(["$routeProvider" , function($routeProvider){


	$routeProvider
	.when("/" , {
		templateUrl : "app/view/home/index.html"
	})
	.when("/loan" , {
		templateUrl : "app/view/loan/loans.htm",
		controller: "LoanListController"
	})
	.otherwise({
        template : "<h1>None</h1><p>Nothing has been selected,</p>"
    });;
	

}]);