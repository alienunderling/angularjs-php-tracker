tracker.config(['$routeProvider', function ($routeProvider) {
    $routeProvider    
    .when('/', {
        templateUrl: 'manager/components/manager.html',
        controller: 'mainController'
    })
    .when('/addService', {
        templateUrl: 'serviceScheduler/components/addService.html',
        controller: 'addServiceController'
    })    
    .when('/viewAppointments', {
        templateUrl: 'manager/components/manager.html',
        controller: ''//'appointmentsController'
    })    
    .when('/addVehicle', {
        templateUrl: 'manager/components/addVehicle.html',
        controller: 'addVehicleController'
    })     
    .when('/addCust', {
        templateUrl: 'manager/components/addCust.html',
        controller: 'addCustomerController'
    })  
    .otherwise({ redirectTo: '/' });
}]);