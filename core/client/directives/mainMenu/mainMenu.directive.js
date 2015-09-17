import '../../directives/mainMenu/mainMenu.scss';

function mainMenu() {
    return {
        restrict: 'E',
        templateUrl: "../../directives/mainMenu/mainMenu.template.html",
        link: function( $scope, lElem, lAttr ){
        }
    }
}


export default angular.module('directives.mainMenu', [])
    .directive('mainMenu', mainMenu)
    .name;

