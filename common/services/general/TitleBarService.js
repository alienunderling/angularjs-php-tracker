tracker.service('titleBarService', ['$log', function ($log) {
    var self = this;
    var curTitle = "";
    
    self.setCurrentTitle = function (curTitle) {
        self.curTitle = curTitle;
    };
    
    self.getCurrentTitle = function () {
        return self.curTitle;
    };
}]);
