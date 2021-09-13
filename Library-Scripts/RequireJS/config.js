'use strict';

if (window.__karma__) {
    var allTestFiles = [];
    var TEST_REGEXP = /spec\.js$/;

    var pathToModule = function (path) {
        return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
    };

    Object.keys(window.__karma__.files).forEach(function (file) {
        if (TEST_REGEXP.test(file)) {
            // Normalize paths to RequireJS module names.
            allTestFiles.push(pathToModule(file));
        }
    });
}

require.config({
    paths: {
        angular: 'Library-Scripts/AngularJS/angular',
        angularRoute: 'Library-Scripts/AngularJS/angular-route',
        angularMocks: 'Library-Scripts/AngularJS/angular-mocks'
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'angularRoute': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        }
    },
    priority: [
        "angular"
    ],
    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/app' : '',
});

console.log("---------- © copy rights reserved 2021 -------------" +
    "\n-------------started loading project------------"
);

require([
    'angular',
    'Modules/main'
], function (angular, app) {
        console.log("Started manual bootstrapping of angular JS application");
        //This directive is used to dinamically attach the css in to head section as the view changes
        app.directive('head', ['$rootScope', '$compile',
            function ($rootScope, $compile) {
                return {
                    restrict: 'E',
                    link: function (scope, elem) {
                        var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
                        elem.append($compile(html)(scope));
                        scope.routeStyles = {};
                        $rootScope.$on('$routeChangeStart', function (e, next, current) {
                            if (current && current.$$route && current.$$route.css) {
                                if (!angular.isArray(current.$$route.css)) {
                                    current.$$route.css = [current.$$route.css];
                                }
                                angular.forEach(current.$$route.css, function (sheet) {
                                    delete scope.routeStyles[sheet];
                                });
                            }
                            if (next && next.$$route && next.$$route.css) {
                                if (!angular.isArray(next.$$route.css)) {
                                    next.$$route.css = [next.$$route.css];
                                }
                                angular.forEach(next.$$route.css, function (sheet) {
                                    scope.routeStyles[sheet] = sheet;
                                });
                            }
                        });
                    }
                };
            }
        ]);
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function () {
            // bootstrap the app manually
            angular.bootstrap(document, ['myApp']);
        });
});