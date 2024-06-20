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
  
  // Handle tab visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      pauseYouTubeVideo();
    } else if (document.visibilityState === 'visible') {
      resumeYouTubeVideo();
    }
  });
  
  // Handle window focus and blur events
  window.addEventListener('blur', () => {
    pauseYouTubeVideo();
  });
  
  window.addEventListener('focus', () => {
    if (document.visibilityState === 'visible') {
      resumeYouTubeVideo();
    }
  });
  