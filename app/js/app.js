var buildMonitor = angular.module('buildMonitor', []);


buildMonitor.controller("MonitorCtrl", function($scope, buildStatusService) {

    $scope.build_name = 'tcochran/kampala_geek_night'

    var refreshStatus = function() { 
        buildStatusService.status($scope.build_name, function (result) {
            $scope.build_result = result;
        });
    }

    $scope.changeBuild = function() {
        refreshStatus();
    };

    refreshStatus();
    
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