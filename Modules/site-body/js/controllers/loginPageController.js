'use strict';

define(['Modules/site-body/js/site-body'], function (siteBody) {
    siteBody.controller("loginPageController", function ($scope, $rootScope) {
        $rootScope.currentView = "Log In";
        $scope.message = "Login page design is in progress ...";
    });
});