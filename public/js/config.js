'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        // For unmatched routes:
        $urlRouterProvider.otherwise('/');

        // states for my app
        $stateProvider
            .state('all dsnRouters', {
                url: '/dsnRouters',
                templateUrl: 'views/dsnRouters/list.html'
            })
            .state('create a dsnRouter', {
                url: '/dsnRouters/create',
                templateUrl: 'views/dsnRouters/create.html'
            })
            .state('edit dsnRouters', {
                url: '/dsnRouters/:dsnRouterId/edit',
                templateUrl: 'views/dsnRouters/edit.html'
            })
            .state('dsnRouters by id', {
                url: '/dsnRouters/:dsnRouterId',
                templateUrl: 'views/dsnRouters/view.html'
            })
            .state('home', {
                url: '/',
                templateUrl: 'views/projects/edit.html'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
