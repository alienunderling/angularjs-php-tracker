tracker.service('localStorageService', ['$log', function ($log) {
    var self = this;
    this.currentMake = "initialCurrentMake";
    //Using CRUD, retreive stored values from storage
    //TODO: Get the make by id from local Storage
    this.getMakeByID = function (id) {
        //using $timeout to mimic return time from DB, return localy stored name
        $log.log("LocalStorageService - getMakeByID: " + this.currentMake);
        return this.currentMake;
    };
    //Using CRUD, retreive stored values from storage
    this.getCurrentMake = function () {
        //using $timeout to mimic return time from DB, return localy stored name
        $log.log("LocalStorageService - getCurrentMake: " + this.currentMake);
        return this.currentMake;
    };
    //Using CRUD, retreive stored values from storage
    this.updateMake = function (make) {
        //using $timeout to mimic return time from DB, return localy stored name
        $log.log("LocalStorageService - updateMake: " + this.currentMake + " -> " + make);
        return this.currentMake;
    };
}]);