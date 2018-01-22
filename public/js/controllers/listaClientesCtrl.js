'use strict';

angular.module('mDigital')
    .controller('listaClientesCtrl', function (recursoCliente, recursoClientesMalaDireta, $rootScope, $routeParams) {
        /* jshint validthis: true */
        var vm = this;
        vm.clientes = [];
        vm.mensagem = '';

        vm.$onInit = function() {
            var eventoAtualizarListaClientes = $rootScope.$on('listaClientesAtualizada', vm.atualizarListaClientes);
            var eventoListarClientesMalaDireta = $rootScope.$on('listaClientesMalaDiretaAtualizada', vm.listarClientesMalaDireta);
            vm.$onDestroy = function() {
                eventoAtualizarListaClientes();
                eventoListarClientesMalaDireta();
            };

            if ($routeParams.rendaInicial && $routeParams.rendaFinal) {
                vm.listarClientesMalaDireta();
            } else {
                vm.atualizarListaClientes();
            }
        }

        vm.atualizarListaClientes = function() {
            vm.clientes = recursoCliente.query(); 
        };

        vm.listarClientesMalaDireta = function() {
            if ($routeParams.rendaInicial && $routeParams.rendaFinal) {
                vm.clientes = recursoClientesMalaDireta.query({rendaInicial:$routeParams.rendaInicial,rendaFinal:$routeParams.rendaFinal});
            } else {
                vm.clientes = [];
            }
        }

        vm.excluir = function(cliente) {
            console.log(cliente);
            
            /*
            recursoCliente.delete({clienteId:cliente.id}, function() {
                $rootScope.$broadcast('listaClientesAtualizada');
            }, function(erro) {
                vm.mensagem = 'Não foi possível excluir o cliente ' + cliente.nome;
            }); 
            */
        };

    });