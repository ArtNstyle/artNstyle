import angular from 'angular';

function editable($rootScope) {
    return {
        replace: false,
        restrict: 'A',
        scope: {
            visiblity: "=",
            item: "=",
            ctrl: "="
        },
        link: function( $scope, lElem, lAttr ){
            //console.log("editable scope", $scope);
            lElem.on("click", function(e){
                console.log("editable scope clicked", $scope.item.title, $scope);
                //console.log("Element clicked.");
                if($rootScope.previous && ($rootScope.previous!== $scope.item)) {
                    if($rootScope.previous.visibilities) {
                        $rootScope.previous.visibilities = {};
                        console.log("saving item", $rootScope.previous);
                        $rootScope.previous = undefined;
                        //$scope.ctrl.saveItem(previous);
                        return;
                    }
                } else if (! $rootScope.previous) {
                    $rootScope.previous = $scope.item;
                }

                $scope.$apply(function () {
                    console.log("editable scope clicked apply", $scope.item.title, $scope);
                    $scope.visiblity = !$scope.visiblity;
                    $rootScope.previous = $scope.item;
                });

            });
        }
    }
}

export default angular.module('directives.editable', [])
    .directive('editable', editable)
    .name;


