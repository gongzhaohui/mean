'use strict';

//DsnRouters service used for projects REST endpoint
angular.module('mean.projects').factory('Projects', ['$resource', function ($resource) {
    return $resource('projects/:projectId', {
        dsnRouterId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);