'use strict';

angular.module('mDigital')
    .controller('cadastroClienteCtrl', function (cadastroDeClientes, $scope, $rootScope) {
        /* jshint validthis: true */
        var vm = this;
        vm.cliente = {};
        vm.mensagem = '';

        $scope.$on('editarClienteEvento', function(event, args) {
            vm.cliente = args.clienteEdicao;
        });
        
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
            delete vm.cliente;
            $rootScope.$broadcast('listarClientesEvento');
            vm.formCliente.$setPristine();
        };
    });
