import BaseWebController from "../commonControllers/baseWeb.controller"

function DialogController($scope, $mdDialog, artsService) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };

    $scope.artUrl = artsService.getCurrentArt().image.replace("thumbnail", "fullPic");
    //console.log("DialogController", $scope.artUrl);
}

export default class artsController extends BaseWebController {
    constructor($location, artsService, picsService, loggedUserService, $stateParams, $mdDialog) {
        super($location, artsService, picsService, loggedUserService, true);
        this.$mdDialog = $mdDialog;
        this.test = 'Hello from artsController';
        this.artistId = $stateParams.artistId;
        this.artsService = artsService;

        // get items has to happen after query has been set
        this.query = "?artistId=" + this.artistId;
        this.getItems();
        //console.log("artsController: constructor", this.artistId, this.query);
    }

    addItem(art) {
        art.artistId = this.artistId;
        return super.addItem(art);
    }

    showBiggerImage(event, art) {
        if(!this.editing) {
            this.artsService.setCurrentArt(art);

            //console.log("showing dialogue", event);
            this.$mdDialog.show({
                    controller: DialogController,
                    templateUrl: '../../features/arts/artDialogue.template.html',
                    parent: angular.element(document.body),
                    targetEvent: event,
                    clickOutsideToClose:true
                })
                .then((answer) => {
                    this.artsService.setCurrentArt("");
                    //console.log("showBiggerImage success", answer);
                }, () => {
                    this.artsService.setCurrentArt("");
                    //console.log("showBiggerImage cancel");
                });

        }

    }

}
//artsController.$inject = ['randomNames'];
