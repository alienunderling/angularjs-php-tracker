// ROUTES
tracker.config(['$routeProvider', function ($routeProvider) {
    $routeProvider    
    .when('/', {
        templateUrl: '',
        controller: ''//'homePageController'
    })
    .when('/addService', {
        templateUrl: '',
        controller: ''//'addServiceController'
    })    
    .when('/viewAppointments', {
        templateUrl: '',
        controller: ''//'appointmentsController'
    })    
    .when('/serviceAdded', {
        templateUrl: '',
        controller: ''//'serviceAddedController'
    })    
    .otherwise({ redirectTo: '/' });
}]);