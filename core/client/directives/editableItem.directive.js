function editableItem() {
    return {
        restrict: 'E',
        scope: {
            editing: "@",
            deleteItemFn: "&",
            addItemFn: "&"
        },
        transclude: true,
        replcae: true,
        template:
        '<div class="stylist">' +
            '<md-button ng-if="editing" class="md-icon-button md-accent small-delete-button" ng-click="deleteItemFn()">' +
                '<i class="material-icons">delete</i>' +
            '</md-button>' +
            '<md-button ng-if="editing" class="md-icon-button md-accent small-add-pic-button" type="file"' +
                'ngf-select="addItemFn({file: $file})" accept="image/*" ngf-max-size="4MB">' +
                    '<i class="material-icons">camera</i>' +
            '</md-button>' +
            '<ng-transclude></ng-transclude>' +
        '</div>',
        link: function( $scope, lElem, lAttr ){
        }
    }
}


export default angular.module('directives.editableItem', [])
    .directive('editableItem', editableItem)
    .name;
