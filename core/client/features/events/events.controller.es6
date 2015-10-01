import BaseWebController from "../commonControllers/baseWeb.controller"

export default class eventsController extends BaseWebController {
  constructor($location, $q, eventsService, picsService, loggedUserService) {
    super($location, $q, eventsService, picsService, loggedUserService);
    this.test = 'Hello from eventsController';
  }
}

//eventsController.$inject = ['randomNames'];
