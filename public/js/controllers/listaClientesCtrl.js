'use strict';

angular.module('mDigital')
    .controller('listaClientesCtrl', function (recursoCliente, recursoClientesMalaDireta, $scope, $rootScope) {
        /* jshint validthis: true */
        var vm = this;
        vm.clientes = [];
        vm.mensagem = '';
        
        vm.listar = function() {
            vm.clientes = recursoCliente.query();
        };

        vm.editar = function(cliente) {
            $rootScope.$broadcast('editarClienteEvento', {clienteEdicao: angular.copy(cliente)});
        };
        
        vm.excluir = function(cliente) {
            recursoCliente.delete({clienteId:cliente.id}, function() {
                var indiceCliente = vm.clientes.indexOf(cliente);
                vm.clientes.splice(indiceCliente, 1);
                
            }, function(erro) {
                vm.mensagem = 'Não foi possível excluir o cliente ' + cliente.nome;
            }); 
        };
        
        $scope.$on('listarClientesEvento', vm.listar); 
        $scope.$on('listarClientesMalaDiretaEvento', function(event, args) {
            vm.clientes = recursoClientesMalaDireta.query({rendaInicial:args.rendaInicial,rendaFinal:args.rendaFinal});
        });

        vm.listar();
    });