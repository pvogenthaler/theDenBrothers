var about = angular.module('denbros.about', []);

about.controller('AboutCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.go = function(view) {
    $location.path(view);
  };
}]);
