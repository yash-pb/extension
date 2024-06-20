// content.js

function pauseYouTubeVideo() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
      video.pause();
    }
  }
  
  function resumeYouTubeVideo() {
    const video = document.querySelector('video');
    if (video && video.paused) {
      video.play();
    }
  }
  
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      pauseYouTubeVideo();
    } else if (document.visibilityState === 'visible') {
      resumeYouTubeVideo();
    }
  });
  