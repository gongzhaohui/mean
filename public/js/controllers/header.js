'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [
        {
            'title': 'DsnRouters',
            'link': 'dsnRouters'
        },
        {
            'title': 'Create New DsnRouter',
            'link': 'dsnRouters/create'
        }
    ];

    $scope.isCollapsed = false;
}]);