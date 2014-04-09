function auth() {
  var clientId = '1048810418500-uba623nnefescs3v4mfl59gtt32j9ko1.apps.googleusercontent.com';
  var scopes = 'https://www.googleapis.com/auth/youtube';
  var config = {
    'client_id': clientId,
    'scope': scopes
  };
  gapi.auth.authorize(config, function() {
    console.log('login complete');
    console.log(gapi.auth.getToken());
    changeState(state.AUTHDONE);
  });
}