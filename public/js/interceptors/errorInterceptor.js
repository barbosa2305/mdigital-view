'use strict';

angular.module('mDigital')
    .factory('errorInterceptor', function($q, $location, $rootScope) {
        return {
            responseError: function (rejection) {
               if (rejection.status === 400) {
                    $rootScope.message = rejection.data.message;
                    $location.path('/error');
                }
                if (rejection.status === 500 || rejection.status === -1) {
                    $rootScope.message = 'Ocorreu um erro interno. Entre em contato com o administrador do sistema.';
                    $location.path('/error');
                }
                return $q.reject(rejection);
            }
        }; 
    });