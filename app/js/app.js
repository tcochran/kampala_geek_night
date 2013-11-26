var app = angular.module('Geeknight', []);

app.controller("HomeCtrl", function($scope, FilmsService, TravisBuildService) {

    $scope.build_name = 'tcochran/kampala_geek_night';

    $scope.refreshBuild = function() {
        TravisBuildService.status($scope.build_name).success(function(result) {
            $scope.buildStatus = result;
        });
    }

    $scope.refreshBuild();
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

app.service('TravisBuildService', function($http) {
    this.status = function(project_name) {
        var url = "https://api.travis-ci.org/repos/" + project_name +".json"
        return $http.get(url)
    }
});



