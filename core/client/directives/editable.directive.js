
function savePrevious(previousItem, ctrl) {
    if(previousItem) {
        if(previousItem.visibilities) {
           previousItem.visibilities = {};
            //console.log("savePrevious", previousItem);
            ctrl.saveItem(previousItem);
            previousItem = undefined;
            return previousItem;
        }
    }
}

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
                if($rootScope.previous && ($rootScope.previous!== $scope.item)) {
                    $rootScope.previous = savePrevious($rootScope.previous, $scope.ctrl);
                    return;
                } else if (! $rootScope.previous) {
                    $rootScope.previous = $scope.item;
                }

                $scope.$apply(function () {
                    //console.log("editable scope clicked apply", $scope.item.title, $scope);
                    $scope.visiblity = !$scope.visiblity;
                    $rootScope.previous = $scope.item;
                });

            });
        }
    }
}

function saveEditable($rootScope) {
    return {
        replace: false,
        restrict: 'A',
        scope: {
            ctrl: "="
        },
        link: function( $scope, lElem, lAttr ){
            lElem.on("click", function(e){
                if($rootScope.previous) {
                    if ($rootScope.previous.visibilities) {
                        $rootScope.previous = savePrevious($rootScope.previous, $scope.ctrl);
                    }
                }
            });
        }
    }
}

export default angular.module('directives.editable', [])
    .directive('editable', editable)
    .directive('saveEditable', saveEditable)
    .name;
