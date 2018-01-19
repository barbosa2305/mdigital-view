'use strict';

angular.module('appDiretivas', [])
    .directive('focado', function($timeout) {
        var ddo = {};
        ddo.restrict = 'A';

        ddo.link =  function (scope, element, attrs) {
            attrs.$observe('focado', function(novoValor) {
                if (novoValor === 'true') {
                    $timeout(function(){
                        element.focus(),
                        element.select()
                    });
                };
            });
        };
        return ddo;
    });