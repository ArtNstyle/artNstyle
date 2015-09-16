import angular from 'angular';

function stylist() {
    return {
        restrict: 'E',
        scope: {
            info: '=',
            saveStylistFn: "&"
        },
        template:
        '<div class="stylist">' +
        '<div class="square" ng-style="{\'background-image\':\'url({{info.image}})\'}" ></div>' +
        '<div class="name">' +
        '<span ng-if="! info.visibilities.nameVisibility" ' +
            'editable visiblity="info.visibilities.nameVisibility" item="info" ctrl="TBD" savefn="">{{info.name}}</span>' +
        '<input ng-if="info.visibilities.nameVisibility" type="text" ng-model="info.name"/>' +
        '</div>' +
        '<div class="speciality">{{info.speciality}}</div>' +
        '<p class="bio">{{info.bio}}</p>' +
        '<a ng-show="info.linkToScheduler" ng-href="{{info.linkToScheduler}}">click to shedule appointment</a>' +
        '</div>',
        controller: function($scope) {
            //console.log("stylist scope", $scope.info);
        }
    }
}

export default angular.module('app.stylist', [])
    .directive('stylist', stylist)
    .name;
