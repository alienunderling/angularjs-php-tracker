tracker.service('CarService', ['localStorageService', '$log', function (localStorageService, $log) {
    var self = this;
    
    //this.make = localStorageService.getCurrentMake();
    
    this.getMakeByID = function (id) {
        $log.log("Car Service: getMakeByID: " + );
        
        //return localStorageService.getMakeByID(id);  
    };
    
    this.getCurrentMake = function () {
        $log.log("Car Service: getCurrentMake: " + this.make);
        
        return this.make;
    };
    
    this.updateMake = function (make) {
      this.make = make;
        $log.log("Car Service: updateMake: " + this.make);
    };
}]);
