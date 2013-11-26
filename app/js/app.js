var app = angular.module('Geeknight', []);

app.controller("HomeCtrl", function($scope, FilmsService) {
    $scope.person = { name: 'kevin bacon' };
});

app.service('FilmsService', function() {

    this.films = function() {
        return [
            {name: 'top gun', genre: 'action', takings: 10000},
            {name: 'life of brian', genre: 'comedy', takings: 20000},
            {name: 'sleepless in seattle', genre: 'romance', takings: 5000},
            {name: 'footloose', genre: 'romance', takings: 40000000}
        ];
    }
})


