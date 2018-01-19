'use strict'; 

angular.module('mDigital')
    .controller('cadastroMalaDiretaCtrl', function ($location, recursoMalaDireta, $routeParams, cadastroDeMalasDiretas, $rootScope) {
        /* jshint validthis: true */ 
        var vm = this;
        vm.malaDireta = {};
        vm.mensagem = '';

        if ($routeParams.malaDiretaId) {
            recursoMalaDireta.get({malaDiretaId:$routeParams.malaDiretaId}, function(malaDireta) {
                vm.malaDireta = malaDireta;
            });
        } 

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
            $location.path("/maladireta");
            $rootScope.$broadcast('listaMalasDiretasAtualizada');
            vm.formMalaDireta.$setPristine();
            delete vm.malaDireta;
        };
    });
