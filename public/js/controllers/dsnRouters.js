'use strict';

angular.module('mean.DsnRouters').controller('DsnRoutersController', ['$scope', '$stateParams', '$location', 'Global', 'DsnRouters', function ($scope, $stateParams, $location, Global, DsnRouters) {
    $scope.global = Global;
    $scope.gridOptions = {
        data: 'DsnRouters',
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEdit: true,
        columnDefs: [
            {field: 'title', displayName: 'title'},
            {field: 'content', displayName: 'content'}
        ]
    };

    $scope.create = function () {
        var dsnRouter = new DsnRouters({
            title: this.title,
            content: this.content
        });
        dsnRouter.$save(function (response) {
            $location.path('dsnRouters/' + response._id);
        });

        this.title = '';
        this.content = '';
    };

    $scope.remove = function (dsnRouter) {
        if (dsnRouter) {
            dsnRouter.$remove();

            for (var i in $scope.DsnRouters) {
                if ($scope.DsnRouters[i] === dsnRouter) {
                    $scope.DsnRouters.splice(i, 1);
                }
            }
        }
        else {
            $scope.dsnRouter.$remove();
            $location.path('DsnRouters');
        }
    };

    $scope.update = function () {
        var dsnRouter = $scope.dsnRouter;
        if (!dsnRouter.updated) {
            dsnRouter.updated = [];
        }
        dsnRouter.updated.push(new Date().getTime());

        dsnRouter.$update(function () {
            $location.path('dsnRouters/' + dsnRouter._id);
        });
    };

    $scope.find = function () {
        DsnRouters.query(function (DsnRouters) {
            $scope.DsnRouters = DsnRouters;
        });
    };

    $scope.findOne = function () {
        DsnRouters.get({
            articleId: $stateParams.articleId
        }, function (dsnRouter) {
            $scope.dsnRouter = dsnRouter;
        });
    };
}]);