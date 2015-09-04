app.directive('mediavideo', function() {
	return {
  	restrict: 'E',
    scope: {
    	info: '='
    },
    templateUrl: "js/directives/mediaVideos.html"
  }
});
app.directive('mediaimage', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/mediaImages.html'
  }
});
