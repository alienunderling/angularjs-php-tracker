// CONTROLLERS
//////////////

/**
* This controller handles the navigation and header
* Uses the 'controller as' notation for practice.
*/
tracker.controller('NavbarController', ['$scope', '$location', function($scope, $location ) {
    var vm = this;
    var appLogo = "Vehicle Maintenance Scheduler";
    var apptPageTitle = "Schedule a Service";
    var reviewPageTitle = "View Appointments";
    
    vm.appLogo = appLogo;
    vm.reviewPageTitle = reviewPageTitle;
    vm.apptPageTitle = apptPageTitle;
    /**
    * Handle the submissions
    */
}]);