'use strict';

define(['Modules/site-menu/js/site-menu'], function (siteMenu) {
    siteMenu.directive('siteMenuDirective', function () {
        return {
            restrict: 'E',
            template: '<button ng-repeat = "menuItem in menuItems" class = "menu-button">' +
               '{{menuItem}}' +
            '</button>'
        };
    });
});