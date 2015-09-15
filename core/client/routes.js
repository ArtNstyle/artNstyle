module.exports = function (app) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            //.state('home', {
            //    url: '/',
            //    views: {
            //        main: {
            //            template: require('./features/home/home.template.html'),
            //            controller: 'homeController'
            //        },
            //    }
            //})
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
            .state('stylists', {
                url: '/stylists',
                views: {
                    main: {
                        template: require('./features/stylists/stylists.template.html'),
                        controller: 'stylistsController',
                        controllerAs: 'stylists'
                    },
                }
            });
    });
};