import angular from 'angular';

function stylist() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        template:
        '<div class="stylist">' +
            '<div class="square" ng-style="{\'background-image\':\'url({{info.image}})\'}" ></div>' +
            '<div class="name">{{info.name}}</div>' +
            '<div class="title">{{info.title}}</div>' +
            '<p class="bio">{{info.bio}}</p>' +
            '<a ng-show="info.link" ng-href="{{info.link}}">click to shedule appointment</a>' +
        '</div>',
        controller: function($scope) {
        }
    }
}

export default angular.module('app.stylist', [])
    .directive('stylist', stylist)
    .name;

