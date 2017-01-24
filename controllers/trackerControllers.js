// CONTROLLERS
//////////////
/**
 * This controller handles the navigation and header
 * Uses the 'controller as' notation for practice.
 */
tracker.controller('NavbarController', ['$scope', '$log', function ($scope, $log) {
    var vm = this;
    var appLogo = "Vehicle Maintenance Scheduler";
    var apptPageTitle = "Schedule a Service";
    var reviewPageTitle = "View Appointments";
    vm.appLogo = appLogo;
    vm.reviewPageTitle = reviewPageTitle;
    vm.apptPageTitle = apptPageTitle;
    $log.info('NavbarController initiated.');
}]);
/**
 * 
 */
tracker.controller('mainController', ['$scope', '$log', '$location', '$timeout', function ($scope, $log, $location, $timeout) {
    $log.info('mainController initiated.');
    var vm = this;
    var srvBtnTxt = "New Customer";
    vm.title = 'Home';
    
    vm.changeView = function (view) {
        $location.path(view); // path not hash
    };
}]);
/**
 * 
 */
tracker.controller('addVehicleController', ['$scope', '$log', '$location', function ($scope, $log, $location) {
    $log.info('addVehicleController initiated.');
    var vm = this;
    var srvBtnTxt = "Vehicle Maintenance Scheduler";
    vm.title = 'Add New Vehicle';
    vm.srvBtnTxt = srvBtnTxt;
    
//    $scope.make = carService.getCurrentMake();
//    $scope.$watch('make', function () {
//        //carService.updateMake($scope.make);
//    });
//    
//    vm.changeView = function (view) {
//        $location.path(view); // path not hash
//    };
//    $log.log(carService.getMakeByID());
}]);

/**
 * 
 */
tracker.controller('addCustomerController', ['$scope', '$log', '$location', 'CustomerService', function ($scope, $log, $location, CustomerService) {
    $log.info('addCustomerController initiated.');
    var vm = this;
    
    //View data
    var checked = "checked";
    var title = "Add new Customer";
    
    vm.checked = checked;
    vm.title = title;
    vm.customerList = {};
    vm.cService = CustomerService;
    
    //Used to change the view to the proper page once the slider is clicked.
    vm.changeView = function (view) {
        $location.path(view); // path not hash
    };
    
    //View data
    vm.showMe = false;
    vm.showMeTestFunc = function() {
        vm.getCustomerList();
    }
    
    vm.customerList = {};

  //  We have a function on the scope that can update the name.
  vm.getCustomerList = function() {
    vm.cService.getCustomerList()
      .then(
      /* success function */
      function(list) {
        vm.customerList = angular.fromJson(decodeURIComponent(list));
        vm.showMe = true;
          
        $log.info('customer list: ' + vm.customerList.name);
      },
      /* error function */
      function(result) {
        console.log("Failed to get the name, result is " + result); 
        vm.showMe = true;
      });
  };
    
   
}]);
/**
 * 
 */
tracker.controller('addServiceController', ['$scope', '$log', '$location', function ($scope, $log, $location) {
    var vm = this;
    
    vm.title = 'Schedule a Service';
    vm.changeView = function (view) {
        $location.path(view); // path not hash
    };
    $log.info('addServiceController initiated.');
}]);
/**
 * 
 */
tracker.controller('viewApptController', ['$scope', '$log', '$location', function ($scope, $log, $location) {
    var vm = this;
    
    vm.title = 'View an Appointment';
    vm.changeView = function (view) {
        $location.path(view); // path not hash
    };
    $log.info('addServiceController initiated.');
}]);