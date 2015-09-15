import angular from 'angular';

// from http://stackoverflow.com/questions/15847726/is-there-a-simple-way-to-use-button-to-navigate-page-as-a-link-does-in-angularjs
function goClick ( $location ) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var path;

            attrs.$observe('goClick', function (val) {
                path = val;
            });

            element.bind('click', function () {
                scope.$apply(function () {
                    $location.path(path);
                });
            });
        }
    }
}

export default angular.module('directives.goClick', [])
    .directive('goClick', goClick)
    .name;