var buildMonitor = angular.module('buildMonitor', []);

buildMonitor.controller("MonitorCtrl", function($scope, buildStatusService) {

    $scope.build_name = 'tcochran/kampala_geek_night'

    var promise = buildStatusService.monitor($scope.build_name, function (result) {
        $scope.build_result = result;
    });
});


buildMonitor.service("buildStatusService", function($http, $timeout) {
    var self = this;

    this.status = function(projectName) {
        var url = "https://api.travis-ci.org/repos/" + projectName + ".json"

        return $http({method: 'GET', url: url })
    }

    this.monitor = function (projectName, statusChangedCallBack) {
        var lastBuildNumber = 0;

        function checkStatus() {

            self.status(projectName).then(function(result) {

                var status = result.data; 
                if (lastBuildNumber != status.last_build_number && status.last_build_result != null)
                {
                    lastBuildNumber = status.last_build_number;
                    statusChangedCallBack(status);
                }
            })
            $timeout(checkStatus, 30000);
        };  
        checkStatus();
    };
});