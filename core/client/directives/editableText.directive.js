import editable from '../directives/editable.directive';

function editableText() {
    return {
        restrict: 'E',
        scope: {
            editing: "@",
            item: "=",
            field: "@",
            placeholder: "@",
            ctrl: '=',
            textarea: '@'
        },
        template:
        '<span ng-if="! editing">{{item[field]}}</span>' +
        '<div ng-if="editing">' +
            '<span ng-if="! item.visibilities.visibility"' +
                'editable visiblity="item.visibilities.visibility" item="item" ctrl="ctrl">{{item[field]}}</span>' +
            '<md-input-container md-no-float="" flex="" ng-if="item.visibilities.visibility">' +
                '<input ng-if="! textarea" type="text" ng-model="item[field]" placeholder="{{placeholder}}"/>' +
                '<textarea ng-if="textarea" type="text" ng-model="item[field]" placeholder="{{placeholder}}"/>' +
            '</md-input-container>' +
        '<div>',
        link: function( $scope, lElem, lAttr ){

            $scope.$watch(()=>{ return $scope.editing}, () => {
                console.log("$scope.editing", $scope.editing);
            });
            //console.log("init editableText", $scope);
        }
    }
}


export default angular.module('directives.editableText', [editable])
    .directive('editableText', editableText)
    .name;
