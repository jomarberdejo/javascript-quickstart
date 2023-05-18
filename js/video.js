window.addEventListener('DOMContentLoaded', function() {
  var videoContainer = document.getElementById('video-container');
  var youtubeVideo = document.getElementById('youtube-video');
  
  youtubeVideo.onerror = function() {
    videoContainer.innerHTML = "Your network doesn't support YouTube.";
  };
});
