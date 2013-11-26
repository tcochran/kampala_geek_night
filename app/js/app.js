var app = angular.module('Geeknight', []);

app.controller("HomeCtrl", function($scope, FilmsService, TravisBuildService) {

    TravisBuildService.monitor('tcochran/kampala_geek_night', function(result) {
        $scope.buildStatus = result;
    });

});

app.service('FilmsService', function() {
    this.films = function() {
        return [
            {name: 'top gun', genre: 'action', takings: 10000},
            {name: 'highlander', genre: 'action', takings: 30000},
            {name: 'speed', genre: 'action', takings: 30000},
            {name: 'life of brian', genre: 'comedy', takings: 20000},
            {name: 'sleepless in seattle', genre: 'romance', takings: 5000},
            {name: 'footloose', genre: 'romance', takings: 40000000}
        ];
    }
})

app.service('TravisBuildService', function($http, $timeout) {

    var self = this; 

    this.status = function(project_name) {
        var url = "https://api.travis-ci.org/repos/" + project_name +".json"
        return $http.get(url)
    }

    this.monitor = function (projectName, statusChangedCallBack) {
        var lastBuildNumber = 0;

        function checkStatus() {
            self.status(projectName).success(function(status) {
                if (lastBuildNumber != status.last_build_number && status.last_build_status != null)
                {
                    lastBuildNumber = status.last_build_number;
                    statusChangedCallBack(status);
                }
            });
            $timeout(checkStatus, 10000);
        };  

        checkStatus();
    };
});



