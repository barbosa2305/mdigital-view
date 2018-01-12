'use strict';

angular.module('mDigital').controller('listaClientesCtrl', function (recursoCliente, $rootScope) {
    /* jshint validthis: true */
    var vm = this;
    vm.clientes = [];
    vm.mensagem = '';

    vm.atualizarListaClientes = function() {
        vm.clientes = recursoCliente.query();
        $rootScope.$on('listaClientesAtualizada', vm.atualizarListaClientes);
    };

    vm.atualizarListaClientes();

    vm.excluir = function(cliente) {
        recursoCliente.delete({clienteId:cliente.id}, function() {
        //recursoCliente.delete({clienteId:2000}, function() {
            $rootScope.$broadcast('listaClientesAtualizada');
        }, function(erro) {
            vm.mensagem = 'Não foi possível excluir o cliente ' + cliente.nome;
        });
    };
});