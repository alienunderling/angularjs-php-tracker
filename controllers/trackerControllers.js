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
    vm.titleFirstTile = srvBtnTxt;
    vm.changeView = function (view) {
        $location.path(view); // path not hash
    };
}]);
/**
 * 
 */
tracker.controller('addVehicleController', ['$scope', '$log', '$location', 'carService', function ($scope, $log, $location, carService) {
    $log.info('addVehicleController initiated.');
    var vm = this;
    var srvBtnTxt = "Vehicle Maintenance Scheduler";
    vm.title = 'Add New Vehicle';
    vm.srvBtnTxt = srvBtnTxt;
    $scope.make = carService.getCurrentMake();
    $scope.$watch('make', function () {
        carService.updateMake($scope.make);
    });
    vm.changeView = function (view) {
        $location.path(view); // path not hash
    };
    $log.log(carService.getMakeByID());
}]);
/**
 * 
 */
tracker.controller('addCustomerController', ['$scope', '$log', '$location', function ($scope, $log, $location) {
    $log.info('addCustomerController initiated.');
    var vm = this;
    var checked = "checked";
    var title = "Add new Customer";
    var custTitle = {
        'background-color': '#568EEA'
    };
    vm.checked = checked;
    vm.title = title;
    vm.changeView = function (view) {
        $location.path(view); // path not hash
    };
    $scope.custTitle = custTitle;
}]);
/**
 * 
 */
tracker.controller('addServiceController', ['$scope', '$log', '$location', function ($scope, $log, $location) {
    var vm = this;
    vm.changeView = function (view) {
        $location.path(view); // path not hash
    };
    $log.info('addServiceController initiated.');
}]);