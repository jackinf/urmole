(function() {
    'use strict';

    angular
        .module('app')
        .controller("app.controller", myCtrl);

    myCtrl.$inject = ['$scope', '$modal'];

    function myCtrl($scope, $modal) {
        $scope.result = "";

        $scope.openModal = function() {
            $scope.result = "";
            var promise = $modal.open({
                templateUrl: "/Home/ShowModal",
                controller: "app.modal.controller"
            });

            promise.result.then(function () {
                $scope.result = "Closed";
                alert('Closed');
            });
        }
    }

})();