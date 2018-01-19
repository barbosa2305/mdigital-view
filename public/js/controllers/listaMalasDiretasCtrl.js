'use strict';

angular.module('mDigital')
    .controller('listaMalasDiretasCtrl', function (recursoMalaDireta, $rootScope, $location) {
        /* jshint validthis: true */
        var vm = this;
        vm.malasDiretas = [];
        vm.mensagem = '';

        vm.$onInit = function() {
            var eventoAtualizarListaMalaDireta = $rootScope.$on('listaMalasDiretasAtualizada', vm.atualizarListaMalasDiretas);
            vm.$onDestroy = function() {
                eventoAtualizarListaMalaDireta();
            };
            vm.atualizarListaMalasDiretas();    
        }

        vm.atualizarListaMalasDiretas = function() {
            vm.malasDiretas = recursoMalaDireta.query();    
        };

        vm.atualizarListaClientesMalaDireta = function(malaDireta) {
            $rootScope.$broadcast('listaClientesMalaDiretaAtualizada', malaDireta.faixaRendaInicial, malaDireta.faixaRendaFinal);
        }

        vm.excluir = function(malaDireta) {
            //$location.path("/maladireta");
            recursoMalaDireta.delete({malaDiretaId:malaDireta.id}, function() {
                $rootScope.$broadcast('listaMalasDiretasAtualizada');
            }, function(erro) {
                vm.mensagem = 'Não foi possível excluir a mala direta ' + malaDireta.nome;
            });
        };
    });