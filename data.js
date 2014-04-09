var live = false;
function getChannels(callback) {
  if (!live) {
    callback(JSON.parse('[["7Avt7NispHc","TEQ3Cm9YEts","vpC-zIA70Wk","U9OMvJ1IcHo","X1rJhimvuoY","qWusomYX-hw","TMx-dEfCEbk","aqY94Ee32dw","fu_mfrPGfdI","DqYPTp8RO6g","jqbDXg2ecLs","ywjaV6W_2Kc","RJwemsEUCb8","2KdUoyLFQVA","s3RR46gUsLI","9AtSOaoH05Y","nJqXwwAdqxs","TxDUefyc46I","8xL4qBYXLZk","UYb0SLV30UU"],["rMHus-0wFSo","jReX7qKU2yc","unWnZvXJH2o","W4N-7AlzK7s","vo4pMVb0R6M","OjTKjELocog","n46umYA_4dM","vHrmiy4W9C0","BgW_GRLN9W0","fxZWtc0mYpQ","hRDjmyEvmBI","SyyrwoCec1k","HQPA5oNpfM4","5AQrr2u64-c","gjIKQ8uTmrI","T4jr0ruYpIc","_dGhyjKMeYs","hFV71QPvX2I","vLAvoaln8oU","My14mZa-eq8"],["unS-7E4CM68","cx5QWrbekYc","K3sncy4h32I","WqQ_FIsouGY","5VQisx8G8iE","ffdcfL8_ilk","fZAqoGgbvMQ","G23nHq8w3WQ","IEuZCv7GlPw","8r1Z5RjuB78","Ay2TSxqBeSI","ub3jj1CHbNQ","EKrusiG226M","FOZATD6HuT4","M-dc9FpAkGo","dOY-5LAw_Ys","uG3J4ffxsDE","0-Nfo5L-Jnc","wrd4M62W0VU","pDNBOT4IQIo"],["6Vu081NOorA","4sI-wDkEBS0","Iy_ogNiryZ8","GFqY089piQ4","ub3jj1CHbNQ","0-Nfo5L-Jnc","cx5QWrbekYc","0bXFnUl7XhM","sA8SnfEaDEU","GQWRYOa4IMo","KQoPx7v74f0","MWydLB0nFew","yQJli_Xci1Y","xUW_2rWyK2Q","b3isCLVghoI","7i1v7HV-ZQc","Q1LZ6JoUkJc","SbrFY8XKsr4","rTmvY11m_0E","gwgfeR2pMuE"],["gcTg9mt4eAk","X3YFlan25LU","Yhj5gjcY77I","28FzV5OHqMU","mza1EQ6aLdg","zXtExOMCDfE","2YKgfCH_Phk","j84j4u4eHVY","14ulDKCX6NY","F32OqR5wYp4","D2PMEvIV8N8","eLkWVMPPDXE","2IKT2akh0Ng","Zfw1FXXhgRk","CsO_hGQVwiQ","I2CGsFXFA9E","1UQSgSdKXF0","dmp8xCAnrZQ"],["gl5GXArC134","kLLXkYQkPqI","Mf82FfX-wuU","UF1T7KzRnrs","cQoppAU1btU","gRJ_QfP2mhU","1TPr3h-UDA0","GeyDf4ooPdo","o65l1YAVaYc","mwjCQj4gcx8","a1dsWjNv3b0","wBr3fniyb4w","CdcNLBfeTis","1haLoJpUNdw","yN-MkRcOJjY","VCWY32-AOLU","RlPfF8y7Ytw","lz4zmxZTzuo","6IBArwEOhFM","qFyDUaSi-5w"],["upUL2Zbosuw","olZxCZh31yU","GpYK9L9ur6U","GEE-YuJQc2Y","8q3gGWn6HwM","mArrNRWQEso","qokEYBNWA_0","uc8svevQbhc","wQdkpsOWBLA","3Xv_UX6OCyg","Ev5lF_cf-hU","aGHzqwQU06g","vtRCMzt3w2Q","vxf1skKXwM0","17PtS1Qx8kU","C3pylGTW7RM","qpysApXRXYE","Otd3tU6DUNs","Ls2UaZdelu0","Xt7O2oHNCOU"],["TNACKWquyys","wgnJevkTEdw","iRMLQC_4pqw","l5xbFna_j0Q","UV6mzD2Yc98","Aa0l_P0K5fs","oapNz_NNGh4","gh_3hch2YNM","5OYIXxNz6Xk","p3fdeXgErns","v5Oz9kVptCY","pWSq7CGh9tg","Sbgha6LQLlY","QnWQezGy1Tc","PpJMTpTukzE","KURufM070oI","CGOIJdBXQno","IHEPNJJlGT4","j7fRIGphgtk","sCHiJVnyo4g"],["pT6hge5XGbw","hPyDiNJA7-A","I9rDLGEDP9k","PHZ4Nr_yDrc","01r0dYZvWHI","yLT3BhKnT2I"],["dB5f4Pjb3gY","lS9CksGe2Ow","-gb1UezHZNs","1u8HQNG9k2s","2LgIj4xm4k0","gClcCtE5hrs","aR7nG7S1_sA","qCmS9vTxdJo","YT5YiQeCo1s","9oe5iDJtyy8","BcO9alLENco"],["VuSNIbhzuAU","j9K8W0UGmi4","XqLp_cOMQP0","SgxWRuhxUbI","A2nklduvThs","iXBA3ovBjfk","uqH_Y1TupoQ","vKA4w2O61Xo","3LsZDunGF0s","8spDQQXxTYQ","evifmhhbpnU","ulZ1CRV2RbA","X3g3ODDP9dU","SMxM57WRA-k","A-OZK2I4CtQ","iqMGijoq1Cs","JIk_SrIQxns","4AivEQmfPpk","oh1-LjicDE0","X1mE2IWeamI"],["zLNXIXingyU","x-ewvCNguug","CDsNZJTWw0w","7jx0dTYUO5E","gmNqmz5NDKc","gRJ_QfP2mhU","d0yGdNEWdn0","XFnGhrC_3Gs","w2itwFJCgFQ","9CqVYUOjHLw","36m1o-tM05g","dSXlKdWF5HE","mArrNRWQEso","4q1dgn_C0AU","Ks-_Mh1QhMc","aSL-iIskEFU","d6wG_sAdP0U","JaF-fq2Zn7I","YxPKoXTKDc8","9vpqilhW9uI"]]'));
  } else {
    var token = gapi.auth.getToken().access_token;
    var apiKey = 'AIzaSyCNlmfQr6EbS6XS9Tk5NAqL7XJ9_ila7X8';
    startChannelsRequest();

    function makeRequest(method, url, callback, opt_data, opt_headers) {
      url += "&key=" + apiKey;

      var data = opt_data || null;
      var headers = opt_headers || {};

      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);

      // Include common headers (auth and version) and add rest. 
      xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      for (var key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }

      xhr.onload = function(e) {
        callback(JSON.parse(e.currentTarget.response));
      };

      xhr.onerror = function(e) {
        console.log(e, AllResponseHeaders());
      };

      xhr.send(data);
    };

    // Called when authorization is complete and app is ready to start
    function startChannelsRequest() {
      var numItems = 20;
      makeRequest('get', 'https://www.googleapis.com/youtube/v3/activities?part=contentDetails,snippet&maxResults=' + numItems + '&home=true', useHomePageResponse);
    }

    function useHomePageResponse(response) {
      console.log("Received response");
      console.log(response);
      var content = response.items.map(function(e) { return extractContent(e); });
      console.log("Mapped to")
      console.log(content);
      content = content.filter(function(e) {return (e.filter != true);});
      console.log("Filtered to");
      console.log(content);
      console.log("Deduped");
      content = deDuplicate(content);
      console.log(content);
      // Put all the recommendations at the top because I suspect these will be better
      content = content.sort(function(a, b) { return ((b.source == 'recommendation') ? 1 : 0) - ((a.source == 'recommendation') ? 1 : 0); });
      console.log(content);
      makeChannels(content);
    }

    function makeChannels(content) {
      var numItems = 20;
      // This returns a function which takes a callback and will return (err, response)
      function getRelatedConstructor(id) {
        return function (callback) { 
          makeRequest('get', 
            'https://www.googleapis.com/youtube/v3/search?part=id&type=video&maxResults=' + numItems + '&relatedToVideoId=' + id, 
            function(response) {
              callback(null, response);
            }
          );
        };
      }
      getRelatedFunctions = content.map(function(e) { return getRelatedConstructor(e.video); });
      async.parallel(getRelatedFunctions, function(err, responses) {
        channels = responses.map(function (e) { return e.items.map(function(f) { return f.id.videoId ;}); });
        callback(channels);
      });
    }

    function deDuplicate (contentWithDupes) {
      content = [];
      for (var i = 0; i < contentWithDupes.length; i++) {
        var match = false
        for (var j = i+1; j < contentWithDupes.length; j++) {
          if (contentWithDupes[i].video == contentWithDupes[j].video || contentWithDupes[i].channel == contentWithDupes[j].channel) {
            match = true;
            break;
          }
        }
        if (!match) {
          content.push(contentWithDupes[i]);
        }
      }
      return content;
    }

    function extractContent(e) {
      var result = {channel: e.snippet.channelId};
      var contentDetails = e.contentDetails;
      if (contentDetails.upload) {
        result.video = contentDetails.upload.videoId;
        result.source = 'upload';
      } else if (contentDetails.recommendation) {
        result.video = contentDetails.recommendation.resourceId.videoId;
        result.source = 'recommendation';
      } else if (contentDetails.like) {
        result.video = contentDetails.like.resourceId.videoId;
        result.source = 'like';
      } else if (contentDetails.bulliten) {
        contentDetails.bulliten.resourceId.videoId;
        result.source = 'bulliten';
      } else {
        result.filter = true;
      }

      return result;

      // Todo: accept playlists
      // else if (e.playlistItem) {
      //  return {playlist: e.playlistItem.playlistId, source: 'playlistItem'}
      // }
    }
  }
}