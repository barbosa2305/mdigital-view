'use strict';

angular.module('clienteServices', ['ngResource'])
    .factory('recursoCliente', function ($resource, config) {  
        return $resource(config.baseUrl + 'cliente/:clienteId', null, {
            'update': {
                method: 'PUT'
            }
        });
    })
    .factory('recursoClientesMalaDireta', function ($resource, config) {  
        return $resource(config.baseUrl + 'cliente/faixarenda/:rendaInicial/:rendaFinal', null);
    })
    .factory('cadastroDeClientes', function (recursoCliente, $q) {
       var service = {};

       service.cadastrar = function(cliente) {
            return $q(function (resolve, reject) {
                if (cliente.id) {
                    recursoCliente.update({clienteId:cliente.id}, cliente, function () {
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
                    recursoCliente.save(cliente, function () {
                        resolve({
                            mensagem: 'Cliente incluído com sucesso',
                            inclusao: true
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
