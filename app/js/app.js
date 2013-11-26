var app = angular.module('Geeknight', []);

app.controller("HomeCtrl", function($scope) {
    $scope.person = { name: 'kevin bacon' };
});

app.controller("InnerCtrl", function($scope) {
    $scope.person.name = 'ralph lauren';
});
