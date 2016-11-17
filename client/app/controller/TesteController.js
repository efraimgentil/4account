
angular.module("app" ).controller("TesteController",
[ "$scope" , function( $scope ){

	$scope.model = { "cod" : 100 , name : "Loleeee "};
	$scope.searchLov = function( codigo , desc , callback  ){
		console.log("OK ? " + codigo );
		console.log( codigo );
		console.log( desc  );
		callback( [ { cod: 101  , name: "name 1 aDDAS " } , { cod: 102  , name: "name 2" }, { cod: 103  , name: "name 3" } ]);

	}

}]);