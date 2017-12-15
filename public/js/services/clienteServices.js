'use strict';

angular.module('clienteServices', ['ngResource'])
    .factory('clientesFactory', function ($resource, config) {  
        return $resource(config.baseUrl + 'cliente', {}, {
            query: {method: 'GET', isArray: true},
            create: {method: 'POST'}
        });
    })
    .factory('clienteFactory', function ($resource, config) {
        return $resource(config.baseUrl + 'cliente' + ':id', {}, {
            get: {method: 'GET'},
            update: {method: 'PUT', params: {id: '@id'}},
            remove: {method: 'DELETE', params: {id: '@id'}}
        });
    })
    .factory('cadastroDeClientes', function (clienteFactory, $q, $rootScope) {
       var evento = 'clienteCadastrado';
       var service = {};

       service.cadastrar = function(cliente) {
            return $q(function (resolve, reject) {
                if (cliente._id) {
                    clienteFactory.update({clienteId: cliente._id}, cliente, function () {
                        $rootScope.$broadcast(evento);
                        resolve({
                            mensagem: 'Cliente atualizado com sucesso',
                            inclusao: false
                        });
                    }, function (erro) {
                        reject({
                            mensagem: 'Não foi possível atualizar o cliente'
                        });
                    });

                } else {
                    clienteFactory.save(cliente, function () {
                        $rootScope.$broadcast(evento);
                        resolve({
                            mensagem: 'Cliente incluído com sucesso',
                            inclusao: false
                        });
                    }, function (erro) {
                        reject({
                            mensagem: 'Não foi possível incluir o cliente'
                        });
                    });
                }
            });
       };
       return service;
    });