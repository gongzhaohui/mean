'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('all articles', {
        url: '/articles',
        templateUrl: 'views/articles/list.html'
    })
        .state('create dsnRouter', {
            url: '/articles/create',
            templateUrl: 'views/articles/create.html'
    })
        .state('edit dsnRouter', {
            url: '/articles/:articleId/edit',
            templateUrl: 'views/articles/edit.html'
    })
        .state('dsnRouter by id', {
            url: '/articles/:articleId',
            templateUrl: 'views/articles/view.html'
    })
      .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
    });
}
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);
