import '../../directives/mainMenu/mainMenu.scss';

function mainMenu(loggedUserService) {
    return {
        restrict: 'E',
        templateUrl: "../../directives/mainMenu/mainMenu.template.html",
        link: function( $scope, lElem, lAttr){
            $scope.authenticated = loggedUserService.authenticated;
        }
    }
}


export default angular.module('directives.mainMenu', [])
    .directive('mainMenu', mainMenu)
    .name;

import '../mainMenu/images/logo.png';