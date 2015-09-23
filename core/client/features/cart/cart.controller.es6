<<<<<<< HEAD
export default class cartController {
  constructor() {
    this.test = "Hello from cartController"
    
  }
}
=======
import BaseWebController from "../commonControllers/baseWeb.controller"

export default class cartController extends BaseWebController {
  constructor($location, artistsService, picsService) {
    super($location, artistsService, picsService);
    this.test = 'Hello from cartController';
  }
 }


>>>>>>> 44850be5d1735c20356a80ae338d240648fb58d6
