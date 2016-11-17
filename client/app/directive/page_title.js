angular
.module("app")
.directive("pageTitle" , [ function(){
	return {
		restrict: "E",
		transclude: true,
		template: "<h3><span ng-transclude></span></h3><hr/>",
	};
} ]);