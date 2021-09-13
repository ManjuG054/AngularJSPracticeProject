define(['Modules/site-body/js/site-body'], function (siteBody) {
    siteBody.directive('bodyHeaderDirective', function () {
        return {
            restrict: 'E',
            template: '<div class = "bodyHeaderContainer"><div style="font-weight:500; margin-right: 30px; float: right;"> Current Time & Date : {{ clock  | date:\'medium\'}}</div>' +
                '<image ng-show="connection" src="StyleSheets/Images/wifi_connected.png" width="40" height="30" style="float: left; margin-top:9px; margin-botton:9px; margin-left:9px;"></image>' +
                '<image ng-show="!connection" src="StyleSheets/Images/wifi_noConnection.png" width="35" height="30" style="float: left; margin-top:9px; margin-botton:9px; margin-left:9px;"></image>' +
                '<div style="font-weight:500; margin-left: 10px; float: left;"> Internet : {{connectionStatus}}</div>' +
                '<div style="font-weight:500; font-size: 25px; text-align: center; color: white; text-shadow: 3px 3px grey;">{{currentView}}</div></div>'
        };
    });
});