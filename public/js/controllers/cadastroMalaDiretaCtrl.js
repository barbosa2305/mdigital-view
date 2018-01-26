'use strict'; 

angular.module('mDigital')
    .controller('cadastroMalaDiretaCtrl', function (cadastroDeMalasDiretas, $rootScope) {
        /* jshint validthis: true */ 
        var vm = this;
        vm.malaDireta = {};
        vm.mensagem = ''; 

        vm.gravar = function (malaDireta) {       
            if (vm.formMalaDireta.$valid) {
                cadastroDeMalasDiretas.cadastrar(malaDireta).then(function(dados) {
                    vm.mensagem = dados.mensagem;
                    vm.inicializar();	
                })
                .catch(function (erro) {
                    vm.mensagem = erro.mensagem;
                });
            }
        };

        vm.inicializar = function() {
            delete vm.malaDireta;
            $rootScope.$broadcast('listarMalasDiretasEvento');
            vm.formMalaDireta.$setPristine();
        };
    });
