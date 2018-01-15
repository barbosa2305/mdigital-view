'use strict';

angular.module('mDigital').controller('cadastroClienteCtrl', function ($location, recursoCliente, $routeParams, cadastroDeClientes, $rootScope) {
    /* jshint validthis: true */
    var vm = this;
    vm.cliente = {};
    vm.mensagem = '';

    if ($routeParams.clienteId) {
        recursoCliente.get({clienteId:$routeParams.clienteId}, function(cliente) {
            vm.cliente = cliente;
        });
    } 

    vm.gravar = function (cliente) {       
        if (vm.formCliente.$valid) {
            cadastroDeClientes.cadastrar(cliente).then(function(dados) {
                vm.mensagem = dados.mensagem;
                vm.inicializar();	
            })
            .catch(function (erro) {
                vm.mensagem = erro.mensagem;
            });
        }
    };

    vm.inicializar = function() {
        $rootScope.$broadcast('listaClientesAtualizada');
        $location.path("/cliente");
        vm.formCliente.$setPristine();
        delete vm.cliente;
    };
});
