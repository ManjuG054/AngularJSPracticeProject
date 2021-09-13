define(['Modules/site-body/js/site-body'], function (siteBody) {
    siteBody.controller("siteBodyHeaderController", function ($scope, $timeout, $window) {
        $scope.clock = "loading clock..."; // initialise the time variable
        $scope.connectionStatus = "loading connection status...";
        $scope.tickInterval = 1000 //ms

        var tick = function () {
            $scope.clock = Date.now() // get the current time
            if ($window.navigator.onLine) {
                $scope.connectionStatus = 'Connected 😊';
                $scope.connection = true;
            }
            else {
                $scope.connectionStatus = 'Not Connected 😒';
                $scope.connection = false;
            }
            $timeout(tick, $scope.tickInterval); // reset the timer
        }
        // Start the timer
        $timeout(tick, $scope.tickInterval);
    });
});