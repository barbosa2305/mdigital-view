'use strict';

angular.module('mDigital')
    .controller('listaMalasDiretasCtrl', function (recursoMalaDireta, $scope, $rootScope) {
        /* jshint validthis: true */
        var vm = this;
        vm.malasDiretas = [];
        vm.mensagem = '';

        vm.listar = function() {
            vm.malasDiretas = recursoMalaDireta.query();
        };

        vm.listarClientesMalaDireta = function(malaDireta) {
            $rootScope.$broadcast('listarClientesMalaDireta', {rendaInicial:malaDireta.faixaRendaInicial, rendaFinal:malaDireta.faixaRendaFinal});
        };
        
        vm.excluir = function(malaDireta) {
            recursoMalaDireta.delete({malaDiretaId:malaDireta.id}, function() {
                var indiceMalaDireta = vm.malasDiretas.indexOf(malaDireta);
                vm.malasDiretas.splice(indiceMalaDireta, 1);
                
            }, function(erro) {
                vm.mensagem = 'Não foi possível excluir a mala direta ' + malaDireta.nome;
            });
        };

        $scope.$on('listarMalasDiretasEvento', vm.listar);
        
        vm.listar();
    });