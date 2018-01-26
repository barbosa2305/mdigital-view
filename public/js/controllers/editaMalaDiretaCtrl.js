'use strict';

angular.module('mDigital')
    .controller('editaMalaDiretaCtrl', function (cadastroDeMalasDiretas, $rootScope) {
        /* jshint validthis: true */
        var vm = this;

        vm.gravar = function(edicaoMalaDireta, malaDireta) {
            if (!edicaoMalaDireta && vm.formEdicao.$valid) {
                cadastroDeMalasDiretas.cadastrar(malaDireta).then(function(dados) {
                    vm.mensagem = dados.mensagem;
                    $rootScope.$broadcast('listarMalasDiretasEvento');
                    vm.formEdicao.$setPristine();
                })
                .catch(function (erro) {
                    vm.mensagem = erro.mensagem;
                });
            }
        };
    });