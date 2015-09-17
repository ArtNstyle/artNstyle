module.exports = function (app) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    main: {
                        template: require('./features/home/home.template.html'),
                        controller: 'homeController',
                        controllerAs: 'home'
                    },
                }
            })
            .state('stylists', {
                url: '/stylists',
                views: {
                    main: {
                        template: require('./features/stylists/stylists.template.html'),
                        controller: 'stylistsController',
                        controllerAs: 'stylists'
                    },
                }
            })
            .state('salon', {
                url: '/salon',
                views: {
                    main: {
                        template: require('./features/salon/salon.template.html'),
                        controller: 'salonController',
                        controllerAs: 'salon'
                    },
                }
            })
            .state('tanning', {
                url: '/tanning',
                views: {
                    main: {
                        template: require('./features/tanning/tanning.template.html'),
                        controller: 'tanningController',
                        controllerAs: 'tanning'
                    },
                }
            })
            .state('artists', {
                url: '/artists',
                views: {
                    main: {
                        template: require('./features/artists/artists.template.html'),
                        controller: 'artistsController',
                        controllerAs: 'artists'
                    },
                }
            })
            .state('events', {
                url: '/events',
                views: {
                    main: {
                        template: require('./features/events/events.template.html'),
                        controller: 'eventsController',
                        controllerAs: 'events'
                    },
                }
            })
    });
};