'use strict';

define(['Modules/site-menu/js/site-menu'], function (siteMenu) {
    siteMenu.controller("siteMenuController", function ($scope) {
        $scope.menuItems = [
            'Site Information',
            'logic used',
            'Jasmine Tests',
            'About Developer',
            'Angular Js',
            'Require Js',
            'menu 1',
            'menu 2',
            'menu 3',
            'menu 4',
            'Angular',
            'Angular 2',
            'menu 5',
            'menu 6',
            'menu 7',
            'menu 8'
        ]
    });
});