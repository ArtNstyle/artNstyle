import BaseWebController from "../commonControllers/baseWeb.controller"

export default class stylistsController extends BaseWebController {
    constructor($location, $q, stylistsService, picsService, loggedUserService) {
        super($location, $q, stylistsService, picsService, loggedUserService);
        this.test = 'Hello from stylistsController';
        // super.setPicUrl("full");
    }
}

//StylistsController.$inject = ['randomNames'];
