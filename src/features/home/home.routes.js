routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
  .state('stylists', {
    url: '/stylists',
    template: require('../stylists/stylists.html'),
    controller: 'StylistsController',
    controllerAs: 'stylists'
  })
  .state('events', {
    url: '/events',
    template: require('../events/events.html'),
    controller: 'EventsController',
    controllerAs: 'events'
  })
    .state('artists', {
    url: '/artists',
    template: require('../artists/artists.html'),
    controller: 'ArtistsController',
    controllerAs: 'artists'
  })
    .state('salon', {
    url: '/salon',
    template: require('../salon/salon.html'),
    controller: 'SalonController',
    controllerAs: 'salon'
  })
}
