window.onload = start;

function start() {
	getChannels(function(channels) { console.log(channels); });
}