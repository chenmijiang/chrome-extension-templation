'use strict';

// With background scripts you can communicate extension files.
// For more information on background script,
// See https://developer.chrome.com/docs/extensions/get-started

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message: string = `hello world from background script!`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});
