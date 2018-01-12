'use strict';

angular.module('mDigital').config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    
    $routeProvider.when('/cliente', {
        templateUrl: 'view/principalCliente.html',
        controller: 'listaClientesCtrl',
        controllerAs: 'vm'
    });
    $routeProvider.when('/cliente/:clienteId', {
        templateUrl: 'view/principalCliente.html',
        controller: 'cadastroClienteCtrl',
        controllerAs: 'vm'
    });
    
    $routeProvider.when('/principalMalaDireta', {
        templateUrl: 'view/principalMalaDireta.html'/*,
        controller: 'listaMalasDiretasCtrl',
        controllerAs: 'vm'
        */
    });
    /*
    $routeProvider.when('/cadastroMalaDireta', {
        templateUrl: 'view/cadastroMalaDireta.html',
        controller: 'cadastroMalaDiretaCtrl',
        controllerAs: 'vm'
    });
    */
    $routeProvider.when('/error', {
        templateUrl: 'view/error.html'
    });

    $routeProvider.otherwise({redirectTo: '/cliente'});
});