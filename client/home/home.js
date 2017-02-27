var home = angular.module('denbros.home', []);

home.controller('HomeCtrl', ['$scope', '$location', '$timeout', '$window', function ($scope, $location, $timeout, $window) {
  $scope.videoid = 'NtZohMRqbP0';
  $scope.go = function(view) {
    $location.path(view);
  };
  $timeout(function() {
    twttr.widgets.load()
  }, 100);
}]);

home.directive('youtube', function($sce, $window) {
  return {
    restrict: 'EA',
    scope: { videoid:'=' },
    replace: true,
    template: '<div style="height:501px;width:891px"><iframe width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
      scope.$watch('videoid', function (newVal) {
        if (newVal) {
          scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal + "?autoplay=1&controls=0&loop=1&playlist=" + newVal);
        }
      });
    }
  };
});

home.directive("twitter", function() {
  return {
    restrict: 'E',
    template: '<a class="twitter-timeline" data-height="900" data-theme="dark" data-link-color="#FFA500" data-chrome="noscrollbar nofooter noborders transparent" href="https://twitter.com/thedenbrothers">Tweets by thedenbrothers</a>',
    link: function(scope, element, attrs) {

    function run(){
      (!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));
    };
    run();
    }
 };
});
