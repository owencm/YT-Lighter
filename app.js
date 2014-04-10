state = {
  AUTHDONE : 0,
  APPREADY : 1
}

var channels;
var ytplayer;
var startTime;
var channel = 0;
var currentIndexForChannel = [];
var errorsPerChannel = []

embedPlayer();

function embedPlayer() {
  var params = { 
    allowScriptAccess: "always",
    wmode: "transparent"
  };
  var atts = { id: "myytplayer" };

  swfobject.embedSWF("http://www.youtube.com/apiplayer?enablejsapi=1&version=3",
                     "ytapiplayer", "100%", "100%", "8", null, null, params, atts);
}

function changeState(newState) {
  console.log("Changing state to "+newState)
  if (newState == state.AUTHDONE) {
    getChannels(function(newChannels) { 
      console.log(newChannels);
      channels = newChannels;
      for (var i = 0; i < channels.length; i++) {
        currentIndexForChannel.push(0);
        errorsPerChannel.push(0);
      }
      changeState(state.APPREADY);
    });
  } else if (newState == state.APPREADY) {
    startTime = Date.now();
    document.querySelector('#auth').style.display = 'none';
    document.querySelector('#ui').style.visibility = 'visible';
    setChannel(channel);
  }
}

function nextChannel() {
  currentIndexForChannel[channel]++;
  setChannel(channel+1);
}

function setChannel(newChannel) {
  channel = newChannel % channels.length;
  console.log("Moved to channel "+newChannel)
  console.log("Starting channel");
  // ytplayer.loadPlaylist(channels[channel]);
  playVideo(channel, currentIndexForChannel[channel]);
  document.querySelector('#channel').innerHTML = channel;
}

function nextVideo() {
  currentIndexForChannel[channel]++;
  if (currentIndexForChannel[channel] >= 19) {
    alert('Out of videos on this channel. This is only a prototype anyway...');
    nextChannel();
  } else {
    playVideo(channel, currentIndexForChannel[channel]);
  }
}

function playVideo(channelIndex, videoIndex) {
  ytplayer.loadVideoById(channels[channelIndex][videoIndex], 0);
}

function onYouTubePlayerReady(playerId) {
  console.log("Player ready");
  ytplayer = document.getElementById("myytplayer");
  ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
  ytplayer.addEventListener("onError", "onytplayerError");
}

function onytplayerStateChange(newState) {
  console.log("Player's new state: " + newState);
  console.log(ytplayer.getDuration());
  if (newState == 0) {
    nextVideo();
  }
}

function onytplayerError(e) {
  console.log("Error: "+e);
  if (e == 150) {
    if (errorsPerChannel[channel]++ > 5) {
      channels.splice(channel, 1);
      currentIndexForChannel.splice(channel, 1);
      errorsPerChannel.splice(channel, 1);
      console.log('Too many errors on channel '+channel);
      setChannel(channel);
    }
  }
  // When we get an error, try moving on and shrugging it off...
  nextVideo();
}