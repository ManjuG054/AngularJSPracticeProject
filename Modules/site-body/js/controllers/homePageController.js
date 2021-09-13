'use strict';

define(['Modules/site-body/js/site-body'], function (siteBody) {
    siteBody.controller("homePageController", function ($scope, $rootScope) {
        $rootScope.currentView = "Home";
        $scope.welcomeMessage = "Welcome !, This is a single page web application built using Angular JS integrated with Require JS.";
    });
});