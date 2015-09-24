import BaseWebController from "../commonControllers/baseWeb.controller"

export default class cartController extends BaseWebController {
  constructor($location, artistsService, picsService, loggedUserService) {
    super($location, artistsService, picsService, loggedUserService);
    this.test = 'Hello from cartController';
  }
 }


