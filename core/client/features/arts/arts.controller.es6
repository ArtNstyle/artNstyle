import BaseWebController from "../commonControllers/baseWeb.controller"

export default class artsController extends BaseWebController {
    constructor($location, artsService, picsService, $stateParams) {
        super($location, artsService, picsService, true);
        this.test = 'Hello from artsController';
        this.artistId = $stateParams.artistId;
        this.query = "?artistId=" + this.artistId;
        //console.log("artsController: constructor", this.artistId, this.query);
        this.getItems();
    }

    addItem(art) {
        art.artistId = this.artistId;
        return super.addItem(art);
    }

}
//artsController.$inject = ['randomNames'];
