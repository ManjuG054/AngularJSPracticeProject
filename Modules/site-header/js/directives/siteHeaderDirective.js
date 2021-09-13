define(['Modules/site-header/js/site-header'], function (siteHeader) {
    siteHeader.directive('siteHeaderDirective', function () {
        return {
            restrict: 'E',
            template: '<button class="home-button" ng-click="linkBodyContent()" type="button"><a href="#/home" style="color: white;">Home</a></button>' +
                '<div style="display: inline-block; line-height: 80px; text-align: center; color: white; font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; font-size: 50px; font-weight: 700; text-shadow: 3px 3px grey;">{{headerTitle}}</div>' +
                '<button class="login-button" type="button"><a href="#/login" style="color: white;">Log In</a></button>'
        };
    });
});