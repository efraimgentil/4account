

var c = null;
angular.module("app").directive("lov" , function($parse , $compile , $timeout){
	return {
		restrict: "E",
		templateUrl: "app/diretivas/templates/lov.html",
		require: 'ngModel',
		scope: {
			codigoType : "@",
			codigoName : "@",
			showCodigo : "@",
			descType : "@",
			descName : "@",
			showDesc : "@" ,
			codigoVal : "@",
			descVal : "@",
			onSearch : "&" , 
			ngModel : "="
		},
		replace: true,
		transclude: {
	       'header': '?lovHeader',
	       'body': 'lovBody',
	    },
		compile: function(  elem, attr ){
			//console.log( $scope["codigoType"] );
			attr.codigoType = attr["codigoType"]  || 'text';
			attr.codigoName = attr["codigoName"]  || 'codigoName';
			attr.showCodigo = ( attr["showCodigo"]  || 'true' ) == "true";
			attr.descType = attr["descType"]  || 'text';
			attr.descName = attr["descName"]  || 'descName';
			attr.showDesc = ( attr["showDesc"]  || 'true' ) == "true";

			return function( $scope, el, attrs, controller , transclude){
				var model = $scope.ngModel;

//				el.find('.modal').append( transclude() );

				$scope.listOfValues = [];

				$timeout( function(){
					$scope.codigoVal = model[ attrs["codigoName"]  ]
					$scope.descVal = model[ attrs["descName"]  ];
				});


	            $scope.searchModel = function(){
	            	$scope.onSearch()( $scope.codigoVal , $scope.descVal , $scope.trataRetorno );
	            }

	            $scope.trataRetorno = function( data ){
	            	$scope.listOfValues  = data;
	            	//$scope.$apply();
	            	console.log(data );
	            }
			 	//c = ngModel;
			}
		},		
	}
});
