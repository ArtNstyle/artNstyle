export default class BaseWebController {
    constructor($location, myWebService, picsService, doNotGetItems) {
        this.url = "http://" + $location.host() + ":" + $location.port() + "/api";
        this.picsUri = "/pics";
        this.thumbnailUri = "/thumbnail?id=";
        this.thumbnailUrl = this.url + this.picsUri + this.thumbnailUri;

        this.picsService = picsService;
        this.myWebService = myWebService;

        if(! doNotGetItems) {
            this.getItems();
        }
    }

    getItems() {
        this.myWebService.getItems(this.query).then((data) => {
            this.items = data;
        });
    }

    saveItem(item) {
        return this.myWebService.saveItem(item);
    }

    deleteItem(item) {
        return this.myWebService.deleteItem(item).then((response)=> {
            this.getItems();
        });
    }

    addItem(item) {
        return this.myWebService.addItem(item).then((response)=> {
            this.getItems();
        });
    }

    deletePic(item) {
        function getDeletePicId(self, url) {
            if(url) {
                var urlParts = url.split("=");
                //console.log('getDeletePicId', urlParts);
                if ((urlParts[0] + '=') === self.thumbnailUrl) {
                    return urlParts[1];
                }
            }
            return "";
        }

        var deletePicId = getDeletePicId(this, item.image);
        if(deletePicId) {
            //console.log("deletePic w picId", deletePicId);
            this.picsService.removePicWithId(deletePicId);
        }
    }

    addPic(item, pic) {

        this.errorMsg = "";
        this.currentPic = {};
        return this.picsService.addPic(pic)
            .then((response) => {
                this.currentPic = response.data;
                //console.log("artistsController: addPic", this.currentPic);
                this.deletePic(item);
                item.image = this.thumbnailUrl + this.currentPic.picId;
                this.saveItem(item).then((response)=> {
                    this.getItems();
                });
            }, (error) => {
                if (error.status > 0) {
                    console.log("addPic error", error);
                    this.errorMsg = error.status + ': ' + error.statusText;
                    //self.currentPic = {};
                }
            }, (evt) => {
                this.currentPic.progress = Math.min(100, parseInt(100.0 *
                    evt.loaded / evt.total));
                //this.emitSetChange();
            });
    }

}

//StylistsController.$inject = ['randomNames'];