'use strict';

//DsnRouters service used for dsnRouters REST endpoint
angular.module('mean.DsnRouters').factory('DsnRouters', ['$resource', function ($resource) {
    return $resource('dsnRouters/:dsnRouterId', {
        dsnRouterId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);