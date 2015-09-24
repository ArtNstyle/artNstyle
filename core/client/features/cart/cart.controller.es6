import BaseWebController from "../commonControllers/baseWeb.controller"

export default class cartController extends BaseWebController {
  constructor($location, artistsService, picsService) {
    super($location, artistsService, picsService);
    this.test = 'Hello from cartController';
  }
 }


