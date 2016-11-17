angular
.module("app")
.directive("pagination" , [ function(){
	return {
		restrict: "E",
		transclude: true,
		scope: {
			pageList: "=",
			action: "&",
			links: "@"
		},
		templateUrl: "app/directive/templates/pagination.html",
		compile : function( elem, attr ){
			attr.links = attr["links"]  || 5;

			return function( scope , el , attrs){

				scope.showNavLeft = function(){
					return parseInt( scope.pageList.currentPage ) > 1	
				}

				scope.showNavRight = function(){
					var n = parseInt( scope.pageList.numOfPages );
					var cp = parseInt( scope.pageList.currentPage );
					return n > 1 && cp < n;
				}

				scope.linksRange = function(){
					var arr = [];
					var cp = parseInt( scope.pageList.currentPage );
					var numOfPages = parseInt( scope.pageList.numOfPages );
					var l = parseInt( ( attrs.links - 1 ) / 2 );
					var left = l;
					var right = l;

					if( cp+right > numOfPages ){ 
						var dif =  (cp+right) - numOfPages;
						left += dif;
						right -= dif;
					}
					var init = ( cp - left ) > 0 ? ( cp - left )  : 1 ;
					for( var i = init ; i <= init + ( left + right ) ; i++ ){
						arr.push( i );
					}
					return arr;
				}

				scope.callAction = function(val){
					scope.action()( val );
				}

			};
		}
	}
} ]);