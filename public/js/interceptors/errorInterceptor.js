'use strict';

angular.module('mDigital')
    .factory('errorInterceptor', function($q, $location, $rootScope) {
        return {
            responseError: function (rejection) {
                if (rejection.status === 400 || rejection.status === 500) {
                    $rootScope.message = rejection.data.message;
                    $location.path('/error');
                }
                return $q.reject(rejection);
            }
        }; 
    });