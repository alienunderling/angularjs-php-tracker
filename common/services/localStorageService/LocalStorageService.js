//    A little bit of data needed to get started
//get this from a file, since no db for now.
var seedData = encodeURIComponent(angular.toJson({
    customer1: {"firstName": "Dave",
                "id": 1
               },
    customer2: {"firstName": "Jax",
                "id": 2
               }
}));
var initialObjCount = 2;

/**
* TODO: pull out the storing of data to another service?
*/
tracker.service('localStorageService', ['$log', '$q', '$timeout', '$localStorage', function ($log, $q, $timeout, $localStorage) {
    var self = this;
    self.applicationData = {};
    
    $localStorage.applicationData = seedData;
    
    $localStorage.initialObjCount = initialObjCount;
    
    self.get = function() {
        //load Data
        self.applicationData = $localStorage.applicationData;
        
        //  Create a deferred operation.
        var deferred = $q.defer();
        
        if(self.applicationData.hasOwnProperty()) {
            $log.info("In LocalStorage: retrieved from cache.");
            deferred.resolve(self.applicationData);
        }else {
            //timeout this to simulate going to server
            $timeout(function () {
                $log.info("In LocalStorage: retrieved from storage.");
                //  Get the name from the server.
                self.applicationData = $localStorage.applicationData;
                deferred.resolve(self.applicationData);
            }, 1000);//1 seconds to get it from server
            
         
            //if we return an error
           //deferred.reject(response);
            
            //Return the promise now
            return deferred.promise;
        }
    };
    
    
    
                                        
    /*    We have a function on the scope that can update the name.
    $scope.updateName = function() {
        NameService.getName()
            .success(function(result) {
                $scope.name = result.name;
            })
            .error(function(response, status) {
                console.log("Failed to get the name, response is " + response + " and status is " + status); 
        });
    };                                
       
                                
                                        
    this.currentMake = "initialCurrentMake";
    //Using CRUD, retreive stored values from storage
    //TODO: Get the make by id from local Storage
    this.getMakeByID = function (id) {
        //using $timeout to mimic return time from DB, return localy stored name
        $log.log("LocalStorageService - getMakeByID: " + this.currentMake);
        return this.currentMake;
    };
    //Using CRUD, retreive stored values from storage
    this.getCurrentMake = function () {
        //using $timeout to mimic return time from DB, return localy stored name
        $log.log("LocalStorageService - getCurrentMake: " + this.currentMake);
        return this.currentMake;
    };
    //Using CRUD, retreive stored values from storage
    this.updateMake = function (make) {
        //using $timeout to mimic return time from DB, return localy stored name
        $log.log("LocalStorageService - updateMake: " + this.currentMake + " -> " + make);
        return this.currentMake;
    };
    */
}]);