'use strict';

angular.module('mDigital').config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    
    $routeProvider.when('/principalCliente', {
        templateUrl: 'view/principalCliente.html',
        controller: 'listaClientesCtrl',
        controllerAs: 'vm'
    });
    
    $routeProvider.when('/principalMalaDireta', {
        templateUrl: 'view/principalMalaDireta.html'/*,
        controller: 'listaMalasDiretasCtrl',
        controllerAs: 'vm'
        */
    });
    /*
    $routeProvider.when('/cadastroCliente', {
        templateUrl: 'view/cadastroCliente.html',
        controller: 'cadastroClientesCtrl',
        controllerAs: 'vm'
    });
    $routeProvider.when('/cadastroMalaDireta', {
        templateUrl: 'view/cadastroMalaDireta.html',
        controller: 'cadastroMalaDiretaCtrl',
        controllerAs: 'vm'
    });
    */

    $routeProvider.otherwise({redirectTo: '/principalCliente'});
});