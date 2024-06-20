// popup.js

document.getElementById('pauseButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: function() {
          const video = document.querySelector('video');
          if (video && !video.paused) {
            video.pause();
          }
        }
      });
    });
  });
  
  document.getElementById('resumeButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: function() {
          const video = document.querySelector('video');
          if (video && video.paused) {
            video.play();
          }
        }
      });
    });
  });
  