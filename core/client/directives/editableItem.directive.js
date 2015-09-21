import '../directives/editableItem.scss';

function editableItem() {
    return {
        restrict: 'E',
        scope: {
            editing: "@",
            item: "=",
            deleteItemFn: "&",
            saveItemFn: "&",
            changePicFn: "&"
        },
        transclude: true,
        replace: true,
        template:
        '<div class="editable-item">' +
            '<md-button ng-if="editing" class="md-icon-button md-accent small-delete-button" ng-click="deleteItemFn()">' +
                '<i class="material-icons">delete</i>' +
            '</md-button>' +
            '<md-input-container ng-if="editing" md-no-float="" >' +
                '<input type="text" class="order-box" ng-model="item[\'orderInList\']" placeholder="Order"' +
                        'ng-change="saveItemFn()"/>' +
            '</md-input-container>' +
            '<md-button ng-if="editing" class="md-icon-button md-accent small-add-pic-button" type="file"' +
                'ngf-select="changePicFn({file: $file})" accept="image/*" ngf-max-size="4MB">' +
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
