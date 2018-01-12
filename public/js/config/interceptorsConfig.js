'use strict';

angular.module('mDigital')
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('timestampInterceptor');
    });