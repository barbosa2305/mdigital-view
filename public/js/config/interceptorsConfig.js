'use strict';

angular.module('mDigital')
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('timestampInterceptor');
        $httpProvider.interceptors.push('errorInterceptor');
        $httpProvider.interceptors.push('loadingInterceptor');
    });