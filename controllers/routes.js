tracker.config(['$routeProvider', function ($routeProvider) {
    $routeProvider    
    .when('/', {
        templateUrl: 'manager/components/manager.html',
        controller: ''//'homePageController'
    })
    .when('/addService', {
        templateUrl: 'serviceScheduler/components/addService.html',
        controller: ''//'addServiceController'
    })    
    .when('/viewAppointments', {
        templateUrl: 'manager/components/manager.html',
        controller: ''//'appointmentsController'
    })    
    .when('/serviceAdded', {
        templateUrl: 'manager/components/manager.html',
        controller: ''//'serviceAddedController'
    })     
    .when('/addVehicle', {
        templateUrl: 'manager/components/addVehicle.html',
        controller: ''//'serviceAddedController'
    })     
    .when('/addCust', {
        templateUrl: 'manager/components/addCust.html',
        controller: ''//'serviceAddedController'
    })  
    .otherwise({ redirectTo: '/' });
}]);