'use strict';

define(['angular', 'angularRoute'], function (angular) {
    // initialize my-module
    var siteBody = angular.module('siteBody', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
           
            $routeProvider.when('/home', {
                templateUrl: 'Views/homePage.html',
                controller: 'homePageController',
                css: 'Modules/site-body/css/homeStyles.css'
            });

            $routeProvider.when('/login', {
                templateUrl: 'Views/logInPage.html',
                controller: 'loginPageController',
                css: 'Modules/site-body/css/loginStyles.css'
            });
        }]);
    return siteBody;
});