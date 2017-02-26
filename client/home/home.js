var home = angular.module('denbros.home', []);

home.controller('HomeCtrl', function($scope, Services) {

});

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
          },
          height: '390',
          width: '640',
          videoId: 'NtZohMRqbP0'
        });
      };
    },
  }
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
