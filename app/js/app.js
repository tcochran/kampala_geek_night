var buildMonitor = angular.module('buildMonitor', []);


buildMonitor.controller("MonitorCtrl", function($scope, buildStatusService) {

    buildStatusService.monitor("angular/angular.js", function (result) {
        var buildResult = "Build Number: " + result.last_build_number + " " + status + " in " + result.last_build_duration + " seconds";  
        $scope.build_result = result;
    });
});


buildMonitor.service("buildStatusService", function($http, $timeout) {
    var self = this;

    this.status = function(projectName, callBack) {

        var url = "https://api.travis-ci.org/repos/" + projectName + ".json"

        $http({method: 'GET', url: url })
            .success(function(data, status, headers, config) {
                callBack(data);
            });
    }

    this.monitor = function (projectName, statusChangedCallBack) {
        var lastBuildNumber = 0;

        function checkStatus() {
            self.status(projectName, function(status) {
                if (lastBuildNumber != status.last_build_number && status.last_build_status != null)
                {
                    lastBuildNumber = status.last_build_number;
                    statusChangedCallBack(status);
                }
            });
            $timeout(checkStatus, 30000);
        };  

        checkStatus();
    };
});