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
            .state('arts', {
                url: '/arts/:artistId',
                views: {
                    main: {
                        template: require('./features/arts/arts.template.html'),
                        controller: 'artsController',
                        controllerAs: 'arts'
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
<<<<<<< HEAD
            .state('cart', {
=======
            .state('cart',{
>>>>>>> 44850be5d1735c20356a80ae338d240648fb58d6
                url: '/cart',
                views: {
                    main: {
                        template: require('./features/cart/cart.template.html'),
                        controller: 'cartController',
                        controllerAs: 'cart'
                    },
<<<<<<< HEAD
=======
                    
>>>>>>> 44850be5d1735c20356a80ae338d240648fb58d6
                }
            })
    });
};