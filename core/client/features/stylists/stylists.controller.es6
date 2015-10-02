import BaseWebController from "../commonControllers/baseWeb.controller"

export default class stylistsController extends BaseWebController {
    constructor($location, stylistsService, picsService, loggedUserService) {
        super($location, stylistsService, picsService, loggedUserService);
        this.test = 'Hello from stylistsController';
        // super.setPicUrl("full");
    }
}

//StylistsController.$inject = ['randomNames'];
