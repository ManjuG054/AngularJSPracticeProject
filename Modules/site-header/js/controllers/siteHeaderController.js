'use strict';

define(['Modules/site-header/js/site-header'], function (siteHeader) {
    siteHeader.controller("siteHeaderController", function ($scope) {
        $scope.headerTitle = 'Angular JS Practice Project';
    });
});