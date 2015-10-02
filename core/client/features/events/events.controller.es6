import BaseWebController from "../commonControllers/baseWeb.controller"

export default class eventsController extends BaseWebController {
  constructor($location, eventsService, picsService, loggedUserService) {
    super($location, eventsService, picsService, loggedUserService);
    this.test = 'Hello from eventsController';
  }
}

//eventsController.$inject = ['randomNames'];
