state = {
  AUTHDONE : 0,
  APPREADY : 1,
  CUEFIRST: 2,
  CUESECOND: 3,
  PLAYFIRST: 4,
  PLAYSECOND: 5,
  PLAYING: 6
}

var currState;
var channels;
var ytplayer;
var startTime;
var channel = 0;
var currentIndexForChannel = [];
var errorsPerChannel = [];

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
  console.log("Changing state from " + currState + " to " + newState)
  currState = newState;
  if (currState == state.AUTHDONE) {
    getChannels(function(newChannels) { 
      console.log(newChannels);
      channels = newChannels;
      for (var i = 0; i < channels.length; i++) {
        currentIndexForChannel.push(0);
        errorsPerChannel.push(0);
      }
      changeState(state.APPREADY);
    });
  } else if (currState == state.APPREADY) {
    startTime = Date.now();
    document.querySelector('#auth').style.display = 'none';
    document.querySelector('#ui').style.visibility = 'visible';
    setChannel(channel);
  } else if (currState == state.CUEFIRST) {
    console.log("Cueing video");
    ytplayer.loadVideoById(channels[channel][currentIndexForChannel[channel]]);
  } else if (currState == state.PLAYFIRST) {
    console.log("Ready to check duration of first video!");
    var duration = ytplayer.getDuration();
    var timePassed = Date.now() - startTime;
    console.log("Trying to start video at: "+(Math.round(timePassed/1000) % duration)+ " seconds");
    ytplayer.seekTo(Math.round(timePassed/1000) % duration, true);
  }
}

function nextChannel() {
  currentIndexForChannel[channel]++;
  setChannel(channel+1);
}

function setChannel(newChannel) {
  channel = newChannel % channels.length;
  console.log("Moved to channel "+newChannel)
  document.querySelector('#channel').innerHTML = channel;
  changeState(state.CUEFIRST);
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
  if (newState == 0) {
    nextVideo();
  } else if (newState == 1) {
    if (currState == state.CUEFIRST) {
      // We now know duration
      if (currState == state.CUEFIRST) {
        changeState(state.PLAYFIRST);
      }
    }
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