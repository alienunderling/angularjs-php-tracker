// CONTROLLERS
//////////////

/**
* This controller handles the navigation and header
* Uses the 'controller as' notation for practice.
*/
tracker.controller('NavbarController', ['$scope', '$log', function($scope, $log ) {
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
tracker.controller('mainController', ['$scope', '$log', function($scope, $log ) {
    $log.info('mainController initiated.');
}]);

/**
* 
*/
tracker.controller('addVehicleController', ['$scope', '$log', function($scope, $log ) {
    $log.info('addVehicleController initiated.');
    
    $scope.make = "";
}]);

/**
* 
*/
tracker.controller('addCustomerController', ['$scope', '$log', function($scope, $log ) {
    $log.info('addCustomerController initiated.');
    
    $scope.firstName = "";
}]);