tracker.service('CustomerService', ['localStorageService', '$timeout', '$log', function (localStorageService, $timeout, $log) {
    var self = this;
    
    //  We have a function on the scope that can update the customer list.
    self.getCustomerList = function() {
        //returns promise so we can just pass it along
        return localStorageService.get();
      };
    
    this.getCustomerByID = function (id) {
        $log.log("Car Service: getCustomerByID: " + id);
        return localStorageService.get();
    };
    
    this.saveCustomer = function (customer) {
        return localStorageService.saveObj(customer);
    };
}]);

