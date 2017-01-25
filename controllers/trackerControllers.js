// CONTROLLERS
//////////////
/**
 * This controller handles the navigation and header
 * Uses the 'controller as' notation for practice.
 */
tracker.controller('NavbarController', ['$scope', '$log', function ($scope, $log) {
    var nav = this;
    var appLogo = "Vehicle Maintenance Scheduler";
    var apptPageTitle = "Schedule a Service";
    var reviewPageTitle = "View Appointments";
    
    nav.appLogo = appLogo;
    nav.reviewPageTitle = reviewPageTitle;
    nav.apptPageTitle = apptPageTitle;
    $log.info('NavbarController initiated.');
}]);
/**
 * 
 */
tracker.controller('mainController', ['$scope', '$log', '$location', '$timeout', function ($scope, $log, $location, $timeout) {
    $log.info('mainController initiated.');
    var mainModel = this;
    var srvBtnTxt = "New Customer";
    mainModel.title = 'Home';
    mainModel.changeView = function (view) {
        $location.path(view); // path not hash
    };
}]);
/**
 * 
 */
tracker.controller('addVehicleController', ['$scope', '$log', '$location', function ($scope, $log, $location) {
    $log.info('addVehicleController initiated.');
    this.title = 'Add New Vehicle';
    this.changeView = function (view) {
        $location.path(view); // path not hash
    };
}]);
/**
 * 
 */
tracker.controller('addCustomerController', ['$scope', '$log', '$location', 'CustomerService', function ($scope, $log, $location, CustomerService) {
    $log.info('addCustomerController initiated.');
    var custModel = this;
    //View data
    var checked = "checked";
    var title = "Add new Customer";
    custModel.checked = checked;
    custModel.title = title;
    custModel.customerList = {};
    custModel.cService = CustomerService;
    custModel.pageTitle = "Add a New Customer";
    custModel.listLabel = "List Customers";
    
    custModel.customer = {
        firstName: "",
        lastName: "",
        address: ""
    }
    
    //Used to change the view to the proper page once the slider is clicked.
    custModel.changeView = function (view) {
        $location.path(view); // path not hash
    };
    
    //View data
    custModel.showMe = false;
    
    //  We have a function on the scope that can update the name.
    custModel.getCustomerList = function () {
        custModel.cService.getCustomerList().then(
            /* success function */
            function (list) {
                custModel.customerList = angular.fromJson(decodeURIComponent(list));
                custModel.showMe = true;
                $log.info('customer list: ' + custModel.customerList);
            }, /* error function */
            function (result) {
                console.log("Failed to get the name, result is " + result);
                custModel.showMe = true;
            });
    };
    
    custModel.save = function () {
        //Move to a service maybe?
        var customer = {
          "firstName": custModel.customer.firstName,
            "lastName": custModel.customer.lastName,
            "address": custModel.customer.address
        };
        
        custModel.cService.saveCustomer(customer);
    };
}]);
/**
 * 
 */
tracker.controller('addServiceController', ['$scope', '$log', '$location', function ($scope, $log, $location) {
    this.title = 'Schedule a Service';
    this.changeView = function (view) {
        $location.path(view); // path not hash
    };
    $log.info('addServiceController initiated.');
}]);
/**
 * 
 */
tracker.controller('viewApptController', ['$scope', '$log', '$location', function ($scope, $log, $location) {
    this.title = 'View an Appointment';
    this.changeView = function (view) {
        $location.path(view); // path not hash
    };
    $log.info('addServiceController initiated.');
}]);