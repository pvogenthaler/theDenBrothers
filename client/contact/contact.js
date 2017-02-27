var contact = angular.module('denbros.contact', []);

contact.controller('ContactCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.go = function(view) {
    $location.path(view)
  }
}])
