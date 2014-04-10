var live = false;
function getChannels(callback) {
  if (!live) {
    callback(JSON.parse('[["gMCQr4ySbs8","eQPKNXThh7U","nvOf6nmczBM","CYPXY4KhhGE","FKvRHaJ2w6w","-g8TPI_5n9U","gywThpkOQwA","PC6nnp37FbM","tUnfhL6C2CM","b4jX-UjRpRA","M4fyBcIjr6I","qLaCDz_Qmtw","8JxYMaay0EI","6XMzMd-O1AU","r7JNGPVfKmI","VE_4zHNcieM","w8I25H3bnNw","4uQM6krIJOU","C-F1VKkQ8gk","TB14HiOV2kU"],["eaUJJpp3X0Y","BLmUrTVbxUo","3I54CRXS23s","FwZBEo2JHIw","OhM8O10-Hn0","b8ljGoWvALU","Qtmd1byR8Ps","C_nAu5alEtU","lH4tfsEvOxQ","lRA-vGjtSOc","28T2MBFIvUI","psjhdmlnnfA","ffE_cG-S5LY","JtluenkCsyI","n8w6XbHB5W8","Hv8ICItg-50","D5D5ab_tSjg","iC9vctJ8-Yk","SS8O4F_U1EA","T2Dys15O-QY"],["_oeW5tAt58M","WvShqJn0hGo","A1GfUoB0kog","CzyhubOYft8","Ewajc2eXZr0","KB43fM_ozKQ","UwPXp0Gssfg"],["iE25sG2ELUk","3GNHWErFfgA","DgD4nVQim-Y","fcAOr1BdKzA","zWumRGO1420","mjnxNGqWrHI","K-fL7-Q_npA","1rLjFKdnCGg","4BD52NQqvHQ","VTRIKgKLI_Y","CK82LX2bV9g","Pu1t1Fevajk","dK99dvJO5PY","4s-tRn-F_4g","bxHhhZJqnoE","2t0Vtt_VXWM","SfOh9eZlOUw","CxKyS9v5qLk","OAarwUT_g2k","YX1qInUW9sQ"],["GHNgfF19CTY","29rMw-_SzLM","VTd2aXLTA84","r7YQjDT3O5E","4vbvhU22uAM","82-xbhfNR2g","YUcazplAc58","qM01qyFdiNc","VsZP-IH8XbM","s_t7lyCiw-s","v3Jpt_Y6JXA","fhfbl-N8xiQ","FwSwopSro0k","FgLjtbuVK38"],["lGIjN0u3UBw","6HBGo5KBQAM","_IeIrQFIyyU","olZxCZh31yU","yvc1lTmqTW8","jHXzzHElFPk","6W0w-82z8ro","Uj_dlTSVPKw","kQcLfjZ5GDk","M4Y3uQmdKYA","J-EDS-MmTDM","23ghle6ixXY","4-jdUdhs_2I","PveM5OtYi3Q","17PtS1Qx8kU","2SaYkWNv0Hg","A08J2V18igc"],["A2nklduvThs","fF0sDJ6ZoxA","1Z82EEes5OM","HLkSdHNUpxs","D1EyAdwz974","GCQ6vD1hvD0","ZI9aDHLptMk","pbApEYaRlBA","PXHuKn7Qwrg","tO-sqIoi_lQ","OT7X8NTer_o","eBPAJERpn6Q","v0cl6-5yHqA","DzsZ_aDSGBY","ClKADICQCZc","iYGc8-L_NmE","Uww-cDfk7vY","E4vPVjZNlzo","oKwqxoLfbQE","Okz4ruWUlvo"],["45glq7huJJc","e2nGhmukF5s","eiJWCJc4Oec","rYXBbREtRB0","X2lUPtLc-FU","iduflTRZRcg","s3zjRcMnRNY","6jNDnzvFcvY","iXI1yHP6urk","9QGr6MvUs6g","nTw9O-hdxvM","wZqE2wm2skU","rUXJMScSyQY","PoKf0jZiqRE","z2_8cfVpXbo","iO6kEok2uMI","oroEOMskgEI","Jg32tTAGuvU","m84M71FRdbw"],["gYXoXiQ3vC0","_RMLT2gFeOA","ABauzZBx5q8","3NDawW6nCz4","KOJUv1Kh47E","SXdZOvbByjM","TuWFPDbCGC0","Ak2wHNsAG5g","X_RL76lSD38","nV7sjMdOsak","dRyZUWs7OQ8","2o32eN08g54","ctHA30HuuYE","5sI4ruTFDuE","gMFHE67oHQ4","baOS5KSrLE8","2o5qIbVRKIg","Ex39KgoxqzQ","ZqUpNEAg-oE","7LEKmV_SQYQ"],["kT3qLOMK6V4","6_YL5S2NwkE","F_witXuhEIk","ZZDizTLX3Rc","Q5_X0mJBahI","aRD2ueUyTr0","w5WRAL5kgbY","LyokSPnBVpY","Q8FrRPZ-RRo","G9J8ELom0vQ","fAv4lsLxp40","1MZ_acN-sMI","-gbvn7Re0eE","qpiJ_ctxrVo","g8sE5xiphJs","VwV5wy3Q8I0","1Jybem_CR60","3_MnEILqSLc","wnzwPHTRPjs","AV9YfZzDpus"],["OQEfpfuGWmw","AIQT7Qh3JhM","p33OevtAbaQ","afHztoM9j2s","R1V-Ot6H9-Y","ONhGeN_Pa8s","hqSaTupB9gM","32QRPem65lA","x7vYSeLgJxo","U_aKx-nWgYw","I7RjHFeQQls","rjvHrYAJqQE"],["cF3yB4HTZQc","dB5f4Pjb3gY","qQM-xdja10k","lS9CksGe2Ow","2LgIj4xm4k0","1u8HQNG9k2s","-gb1UezHZNs","HPw8ZGDORKg","gClcCtE5hrs","aR7nG7S1_sA","EQFCT8YaYcE","JMn1hbYFhy4","VFx0p_8fXXQ","KRFZARiZKOc","YT5YiQeCo1s","RLq-KmI3VKc","7pob2EAl5wk","cahxcu4Ai54","BcO9alLENco","i8XADgFfUkE"],["qPK67Px8sR8","psiILfa-G1c","uUWrcFpmI5U","albvgSKfgSc","OcLcX_lZFqM","T5Cp55MvX54","3IiyG5-kIN8","OarUkDmTlVI","QFwOr-FzeCg","wy7b5dM0mLA","3o3fvFFMF1U","XQFaYXKhbco","GnkzvAXWV-0"],["OjkzfeJz66o","KB43fM_ozKQ","yJXTXN4xrI8","0UzMaoaXKaM","u_0gdjbjO2U","k9710brnmd4","rpHlulBFqyE","7p9My6ZW9fg","xJEXd9SPQtc","_IZMVMf4NQ0","ScdLqAA_64E","aaK-l0bPyY0","kpzEsgSBUqc","nzWO3P0sGgg","uNS1QvDzCVw","ptM7FzyjtRk","qD0_yWgifDM","bkY-o07h7T4","5xtgtJTC2go","KI7u_pcfAQE"]]'));
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