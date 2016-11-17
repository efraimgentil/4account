angular.module("app")
.controller("LoanListController", [
	"$scope" ,
function( $scope ){

	console.log("OK ");
	$scope.list = {
		list: [
		{ 
			id: 1,
			value: 1000,
			person_name: "Adriano",
		 } 
		, {
			id: 2,
			value: 6800,
			person_name: "Patricia",
		}
		, {
			id: 3,
			value: 4200,
			person_name: "Rose",
		}
		] ,
		currentPage : 1 ,
		numOfPages : 10
	};

	$scope.busca = function ( data ){
		$scope.list.currentPage = data;
	}

}
]);