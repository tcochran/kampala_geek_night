var app = angular.module('Geeknight', []);

app.controller("HomeCtrl", function($scope, FilmsService) {
    $scope.person = { name: 'kevin bacon' };
    $scope.films = FilmsService.films();
    $scope.selectedFilm = null;
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


