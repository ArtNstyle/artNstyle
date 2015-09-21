import BaseWebController from "../commonControllers/baseWeb.controller"

export default class eventsController extends BaseWebController {
  constructor($location, eventsService, picsService) {
    super($location, eventsService, picsService);
    this.test = 'Hello from eventsController';
  }
}

//eventsController.$inject = ['randomNames'];
