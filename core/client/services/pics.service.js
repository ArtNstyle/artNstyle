"use strict";
import ngFileUpload from 'ng-file-upload';

class picsService {
    constructor($http, $location, Upload) {
        //console.log("init picsService");

        this.url = "http://" + $location.host() + ":" + $location.port() + "/api";
        this.picturesUri = "/pics";
        this.idSelector = "?id=";
        this.picIdSelector = "?picId=";

        //this.url = "MY_SERVER.url";
        this.baseUrl = this.url + this.picturesUri;
        this.baseUrlWId = this.baseUrl + this.idSelector;
        this.baseUrlWPicId = this.baseUrl + this.picIdSelector;
        this.$http = $http;
        this.Upload = Upload;
    }

    getPicDatas() {
        return this.$http.get(this.baseUrl).then(function(response) {
            return response.data;
        });
    }

    getPicData(fieldname, expectedValue) {
        var criteria = "?" + fieldname + "=" + expectedValue;
        return this.$http.get(this.baseUrl + criteria).then(function(response) {
            var items = response.data;
            if(items.length > 0) {
                return items[0];
            }
            return null;
        });
    }

    addPic(pic) {
        return this.Upload.upload({
            url: this.baseUrl,
            file: pic
        });
    }

    removePic(pic) {
        return this.$http.delete(this.baseUrlWPicId + pic._id);
    }

    removePicWithId(picId) {
        return this.$http.delete(this.baseUrlWPicId + picId);
    }

    savePic(pic) {
        //console.log("savePic", pic);
        return this.$http.put(this.baseUrlWId + pic._id, pic);
    }
}

export default angular.module('services.picsService', [ngFileUpload])
    .service('picsService', picsService)
    .name;

