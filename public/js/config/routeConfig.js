'use strict';

angular.module('mDigital')
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        
        $routeProvider.when('/cliente', {
            templateUrl: 'view/principalCliente.html'
        });
        $routeProvider.when('/maladireta', {
            templateUrl: 'view/principalMalaDireta.html'
        });
        $routeProvider.when('/error', {
            templateUrl: 'view/error.html'
        });

        $routeProvider.otherwise({redirectTo: '/cliente'});
    });