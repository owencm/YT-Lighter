function interactiveSignIn() {
  chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
    } else {
      console.log('Token acquired:'+token+
        '. See chrome://identity-internals for details.');
    }
  });
}

window.onload = interactiveSignIn;