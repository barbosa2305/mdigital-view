'use strict';

angular.module('malaDiretaServices', ['ngResource'])
    .factory('recursoMalaDireta', function ($resource, config) {  
        return $resource(config.baseUrl + 'maladireta/:malaDiretaId', null, {
            'update': {
                method: 'PUT'
            }
        });
    })
    .factory('cadastroDeMalasDiretas', function (recursoMalaDireta, $q) {
       var service = {};

       service.cadastrar = function(malaDireta) {
            return $q(function (resolve, reject) {
                if (malaDireta.id) {
                    recursoMalaDireta.update({malaDiretaId:malaDireta.id}, malaDireta, function () {
                        resolve({
                            mensagem: 'Mala direta atualizada com sucesso',
                            inclusao: false
                        });
                    }, function (erro) {
                        reject({
                            mensagem: 'Não foi possível atualizar a mala direta'
                        });
                    });

                } else {
                    recursoMalaDireta.save(malaDireta, function () {
                        resolve({
                            mensagem: 'Mala direta incluída com sucesso',
                            inclusao: true
                        });
                    }, function (erro) {
                        reject({
                            mensagem: 'Não foi possível incluir a mala direta'
                        });
                    });
                }
            });
       };
       return service;
    });
