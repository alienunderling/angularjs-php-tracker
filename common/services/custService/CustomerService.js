tracker.service('CustomerService', ['localStorageService', '$timeout', '$log', function (localStorageService, $timeout, $log) {
    var self = this;
    
    //  We have a function on the scope that can update the customer list.
    self.getCustomerList = function() {
        //returns promise so we can just pass it along
        return localStorageService.getCustomers();
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

