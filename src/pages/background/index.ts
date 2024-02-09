chrome.tabs.query(
  { currentWindow: true, active: true },
  function (currentTab: chrome.tabs.Tab[]) {
    var currentTabId = currentTab[0]?.id;

    chrome.tabs.query(
      { currentWindow: true },
      function (tabs: chrome.tabs.Tab[]) {
        tabs.forEach(function (tab) {
          if (tab.id !== currentTabId && tab.id !== undefined) {
            chrome.tabs.remove(tab.id);
          }
        });
      }
    );
  }
);

chrome.runtime.onUpdateAvailable.addListener(() => {
  chrome.runtime.reload();
});
