import angular from 'angular';

function stylist() {
    return {
        restrict: 'E',
        scope: {
            info: '=',
            ctrl: '='
        },
        template:
        '<div class="stylist">' +
            '<div class="square" ng-style="{\'background-image\':\'url({{info.image}})\'}" ></div>' +
            '<div class="name">' +
                '<span ng-if="! info.visibilities.nameVisibility" ' +
                    'editable visiblity="info.visibilities.nameVisibility" item="info" ctrl="ctrl">{{info.name}}</span>' +
                '<input ng-if="info.visibilities.nameVisibility" type="text" ng-model="info.name"/>' +
            '</div>' +
            '<div class="speciality">' +
                '<span ng-if="! info.visibilities.specialityVisibility" ' +
                'editable visiblity="info.visibilities.specialityVisibility" item="info" ctrl="ctrl">{{info.speciality}}</span>' +
                '<input ng-if="info.visibilities.specialityVisibility" type="text" ng-model="info.speciality"/>' +
            '</div>' +
            '<p class="bio">' +
                '<span ng-if="! info.visibilities.bioVisibility" ' +
                'editable visiblity="info.visibilities.bioVisibility" item="info" ctrl="ctrl">{{info.bio}}</span>' +
                '<textarea ng-if="info.visibilities.bioVisibility" ng-model="info.bio"></textarea>' +
            '</p>' +
            '<a ng-if="! ctrl.editing && info.linkToScheduler" ng-href="{{info.linkToScheduler}}">' +
                'click to shedule appointment</a>' +
            '<input ng-if="ctrl.editing" type="text" ng-model="info.linkToScheduler"/>' +
            //'<a ng-show="info.linkToScheduler" ng-href="{{info.linkToScheduler}}">click to shedule appointment</a>' +
        '</div>',
        controller: function($scope) {
            //console.log("stylist scope", $scope.info);
        }
    }
}

export default angular.module('app.stylist', [])
    .directive('stylist', stylist)
    .name;
