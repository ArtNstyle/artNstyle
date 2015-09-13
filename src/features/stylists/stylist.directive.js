import angular from 'angular';

function stylist() {
    return {
        restrict: 'E',
        scope: {
            stylist: '='
        },
        template:
        '<div class="stylist">' +
            '<div class="square" ng-style="{\'background-image\':\'url({{image}})\'}" ></div>' +
            '<div class="name">{{name}}</div>' +
            '<div class="title">{{title}}</div>' +
            '<p class="bio">{{bio}}</p>' +
            '<a ng-if="link" ng-href="{{link}}">click to shedule appointment</a>' +
        '</div>',
        controller: function($scope) {

            $scope.name = "Jane Doe";
            $scope.title = "Stylist";
            $scope.bio = "Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes";
            $scope.link = "https://www.google.com/";
            $scope.image = "http://45.55.16.198:3039/api/pocketScrum/fullpic?id=55f4b2de516b4266230081c2";
        }
    }
}

export default angular.module('app.stylist', [])
    .directive('stylist', stylist)
    .name;

