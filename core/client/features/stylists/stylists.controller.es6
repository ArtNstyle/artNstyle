import BaseWebController from "../commonControllers/baseWeb.controller"

export default class stylistsController extends BaseWebController {
    constructor($location, stylistsService, picsService) {
        super($location, stylistsService, picsService);
        this.test = 'Hello from stylistsController';
        super.setPicUrl("full");
    }
}

//StylistsController.$inject = ['randomNames'];
