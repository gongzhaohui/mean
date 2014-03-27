'use strict';

angular.module('mean.projects').controller('ProjectsController', ['$scope', '$stateParams', '$location', 'Global', 'Projects', function ($scope, $stateParams, $location, Global, Projects) {
    $scope.global = Global;
    $scope.projects = {

    };

    $scope.create = function () {
        var project = new Projects({
            name: this.name,
            description: this.description,
            favicon: this.favicon
        });
        project.$save(function (response) {
            $location.path('projects/' + response._id);
        });

        this.name = '';
        this.description = '';
        this.favicon = ""
    };

    $scope.remove = function (project) {
        if (project) {
            project.$remove();

            for (var i in $scope.projects) {
                if ($scope.projects[i] === project) {
                    $scope.projects.splice(i, 1);
                }
            }
        }
        else {
            $scope.project.$remove();
            $location.path('projects');
        }
    };

    $scope.update = function () {
        var project = $scope.project;
        if (!project.updated) {
            project.updated = [];
        }
        project.updated.push(new Date().getTime());

        project.$update(function () {
            $location.path('projects/' + project._id);
        });
    };

    $scope.find = function () {
        Projects.query(function (project) {
            $scope.dsnRouters = project;
        });
    };

    $scope.findOne = function () {
        Projects.get({
            dsnRouterId: $stateParams.projectId
        }, function (project) {
            $scope.project = project;
        });
    };
}]);