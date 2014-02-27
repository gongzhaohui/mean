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
            .state('create article', {
                url: '/dsnRouters/create',
                templateUrl: 'views/dsnRouters/create.html'
            })
            .state('edit article', {
                url: '/dsnRouters/:articleId/edit',
                templateUrl: 'views/dsnRouters/edit.html'
            })
            .state('article by id', {
                url: '/dsnRouters/:articleId',
                templateUrl: 'views/dsnRouters/view.html'
            })
            .state('home', {
                url: '/',
                templateUrl: 'views/index.html'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
