// // chrome.runtime.onInstalled.addListener(function() {
// //     chrome.storage.sync.set({color: '#3aa757'}, function() {
// //       console.log("The color is green.");
// //     });
// //   });

// chrome.browserAction.onClicked.addListener(function(tab) { 
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         var input = document.getElementById('urlInput');

//         // since only one tab should be active and in the current window at once
//         // the return variable should only have one entry
//         var activeTab = tabs[0];
//         var activeTabId = activeTab.id; // or do whatever you need
//         var url = activeTabId.url;
//         input.value = url
//      });
// });
