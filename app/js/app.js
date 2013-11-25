var buildMonitor = angular.module('buildMonitor', []);


buildMonitor.controller("MonitorCtrl", function($scope, buildStatusService) {

    buildStatusService.status("tcochran/kampala_geek_night", function (result) {
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
});