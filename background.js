// background.js

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tabs = await chrome.tabs.query({});
    for (const tab of tabs) {
      if (tab.url.includes("youtube.com/watch")) {
        const scriptFunction = tab.id === activeInfo.tabId ? resumeYouTubeVideo : pauseYouTubeVideo;
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: scriptFunction
        });
      }
    }
  });
  
  chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes("youtube.com/watch")) {
      const activeTab = await chrome.tabs.query({ active: true, currentWindow: true });
      const scriptFunction = activeTab[0].id === tabId ? resumeYouTubeVideo : pauseYouTubeVideo;
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: scriptFunction
      });
    }
  });
  
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
  