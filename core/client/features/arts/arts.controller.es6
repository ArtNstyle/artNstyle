import BaseWebController from "../commonControllers/baseWeb.controller"

export default class artsController extends BaseWebController {
    constructor($location, artsService, picsService, loggedUserService, $stateParams) {
        super($location, artsService, picsService, loggedUserService, true);
        this.test = 'Hello from artsController';
        this.artistId = $stateParams.artistId;

        // get items has to happen after query has been set
        this.query = "?artistId=" + this.artistId;
        this.getItems();
        //console.log("artsController: constructor", this.artistId, this.query);
    }

    addItem(art) {
        art.artistId = this.artistId;
        return super.addItem(art);
    }

}
//artsController.$inject = ['randomNames'];
