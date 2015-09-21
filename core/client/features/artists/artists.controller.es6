import BaseWebController from "../commonControllers/baseWeb.controller"

export default class artistsController extends BaseWebController {
  constructor($location, artistsService, picsService) {
    super($location, artistsService, picsService);
    this.test = 'Hello from artistsController';
  }
}
//artistsController.$inject = ['randomNames'];
