state = {
  AUTHDONE : 0,
  APPREADY : 1
}

var channels;
var ytplayer;
var channel = 0;

function changeState(newState) {
  console.log("Changing state to "+newState)
  if (newState == state.AUTHDONE) {
    getChannels(function(newChannels) { 
      console.log(newChannels);
      channels = newChannels;
      changeState(state.APPREADY);
    });
  } else if (newState == state.APPREADY) {
    document.querySelector('#auth').style.display = 'none';
    document.querySelector('#ui').style.visibility = 'visible';
    setChannel(channel);
  }
}

function nextChannel() {
  setChannel(channel+1);
}

function setChannel(newChannel) {
  channel = newChannel % channels.length;
  console.log("Moved to channel "+newChannel)
  console.log("Starting channel");
  ytplayer.loadPlaylist(channels[channel]);
}

function skip() {
  ytplayer.nextVideo();
}

var params = { allowScriptAccess: "always" };
var atts = { id: "myytplayer" };
swfobject.embedSWF("http://www.youtube.com/apiplayer?enablejsapi=1&version=3",
                   "ytapiplayer", "100%", "100%", "8", null, null, params, atts);

function onYouTubePlayerReady(playerId) {
  console.log("Player ready");
  ytplayer = document.getElementById("myytplayer");
}