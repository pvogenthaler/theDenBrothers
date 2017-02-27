var home = angular.module('denbros.home', []);

home.controller('HomeCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
  $timeout(function() {
    twttr.widgets.load()
  }, 500);
}])

home.directive('youtube', function($window) {
  return {
    restrict: "E",
    template: '<div></div>',

    link: function(scope, element, attrs) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;

      $window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player(element.children()[0], {
          playerVars: {
            autoplay: 1,
            html5: 1,
            controls: 0,
            loop: 1,
            playlist: 'NtZohMRqbP0'
          },
          height: '501',
          width: '891',
          videoId: 'NtZohMRqbP0'
        });
      };
    },
  }
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





// app.directive('myYoutube', function($sce) {
//   return {
//     restrict: 'EA',
//     scope: { video:'=' },
//     replace: true,
//     template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="1" allowfullscreen></iframe></div>',
//     link: function (scope) {
//       scope.$watch('video', function (newVal) {
//         if (newVal) {
//           scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
//         }
//       });
//     }
//   };
// });
