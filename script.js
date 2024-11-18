function loadVideo(videoSrc, videoTitle) {
  // Change the video source
  const videoPlayer = document.getElementById('main-video');
  const videoTitleElement = document.querySelector('.video-title h2');
  
  // Update the player with the new video and title
  videoPlayer.src = videoSrc;
  videoTitleElement.textContent = videoTitle;
  
  // Restart the video
  videoPlayer.load();
  videoPlayer.play();
}
