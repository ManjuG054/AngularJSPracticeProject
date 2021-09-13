'use strict';

define([
    'angular',
    'angularRoute',
    'Modules/site-header/main',
    'Modules/site-menu/main',
    'Modules/site-body/main',
], function (angular) {
        console.log("All Modules loaded successfully");
    // Declare app level module which depends on views, and components
    return angular.module('myApp', [
        'ngRoute',
        'siteHeader',
        'siteMenu',
        'siteBody'
    ]).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({ redirectTo: '/home' });
        }]);
});