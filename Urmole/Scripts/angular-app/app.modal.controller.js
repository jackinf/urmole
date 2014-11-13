(function () {
    'use strict';

    angular
        .module('app')
        .controller('app.modal.controller', modalCtrl);

    modalCtrl.$inject = ['$modalInstance', '$scope'];

    function modalCtrl($modalInstance, $scope) {
        $scope.shownPartial = 1;

        $scope.showPartial1 = function () {
            $scope.shownPartial = 1;
        }

        $scope.showPartial2 = function () {
            $scope.shownPartial = 2;
        }
    }
})();