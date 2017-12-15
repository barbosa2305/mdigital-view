'use strict';

angular.module('mDigital').controller('listaClientesCtrl', function ($scope, clientesFactory) {
    /* jshint validthis: true */
    var vm = this;
    vm.clientes=[];

    vm.clientes=[{nome:"jose",email:"abc@abc.com"},{nome:"maria",email:"maria@abc.com"} ];

    

    /*vm.clientes = clientesFactory.query();*/
});