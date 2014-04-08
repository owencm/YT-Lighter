var live = false;
function getChannels(callback) {
	if (!live) {
		callback(JSON.parse('[["wVWRzO2_r_Q","6CH-IE99ZvU","DPoEzXLmVjg","82vTpMHyLBA","cmbSCtl6XVI","G1MbKD1DRwM","W6TCRms3jU4","dwpph2h8jD8","2jxIzM1IP9U","0SBR6jZPEig","nV_uKxGPF_I","Kq8ZqVTrOFI","oIgPIGUQ8yY","1yRhacGLGEs","Z0uknBJc8NI","z00PkPXnKGc","9ZqZtAa-FK8","yAkI9QuwyGQ","CGeZeQ3CmzE","-RR-DUJv6cs"],["dxYNUu_2egM","wmEmvKaKt5A","RL96ckeyfVo","JFiApf_m4H0","dsVgk9oMyx8","PkoBoF9FDXg","-KZ_F9YkB6w","s6R4DUtqaY8","dQ96unZHx-c","cSBgH_wf5bc","3kB-5Srv05M","HkKLANmUbF4","-3eX86NqZj0","jLm-5B7NXug","NDk73GUwicY","dBV16QCRDfw","6KQ1sM2dGps","ZSR8J6LUaT8","Wlr7rpyvJNo","xy1M5VHF3no"],["aSgVRkDD_m0","yowHM6nqu60","3LsZDunGF0s","LNalIyHtqHo","24R8JObNNQ4","cMfbohNGT1w","xXAoG8vAyzI","Ms4NIB6xroc","ZsyoNU0NZHw","t_N7MAr98CI","xRTjHJ93UYg","U0-R1a2ke48","N2X1gA5apcU","OWGR8cSM1dI","tHp3c9ziIq0","AvlZBH_aPlM","V0CvmK0dVcI","PdxPCeWw75k","oJCfXb4Ci9g","VRE1nPqdmR8"],["Wd-7W4NQ7i0","CVtv3TU5OL4","Ku8_cr5nMGY","FROE8VnBZxg","GJZrfAC2Ysg","1HVc2eL8yjk","z6bmLWO2LGY","y3wygLRmSHI","0aNfUqqxYN0","9BNEDA3iy4w","D3JL0PpmYw0","6kodQXgpvys","YjyCTKtpFeQ","YiKBm507yBw","1Mi8J0Z0d1A","p_o6wkRCXJk","HHGTUQ0lTCA","Fi1sBwV1-tU","XN_e8RWDHlE","om8invGWkeo"],["y3wygLRmSHI","bR586YlEhpI","UReXSSe1abE","z9G4ZAHKncw","u7kUBl8a56Q","uZ91KDaW7kc","Ka7TiWE4N18","kuWPumAP3us","E3d84k4Zm-U","R_31H6rYh-A","Yiwhez0fwV8","9PLxNRjwRDM","JsvMPomyT-Y","z6bmLWO2LGY","CD6W_tuQUM8","REmxjpNLMz4","rn4CYXhMph0","DmiOBac0uuE","Zs46yd-Xidc","pwskwBsJlQw"],["1B_EhXv_EC4","X86R46wT8tM","7-wAzlqzXH0","rWHQm1KvLhw","Gj1MqHgFnmE","ZRxf9HmSo4k","ohhBZtNPd0s","ZS7PO7_tLyM","SrPJ0j9NdVk","QKfLOBfRbaU","5ZCsUbRydBU","muYFZVj-kDY","ub3jj1CHbNQ","iS7-Dk5wUpQ","XWAxpugt0J4","3xovQcEOdg8","JVJxlWMy7kc","mfM5Z1t6uWQ","r8IJhEgaUcU","Gzv2jgjLNbc"],["hitClSdp4Jg","VALaI9HpmUw","-pNTn9cJApg","HA-_5Xb0M18","er-E1vxEnic","VSpFRcTeUQ4","JzkVlQ3nlVM","78ZWoVIsWVQ","2j7SIxMGj5Q","TbNymweHW4E","eHSSNyIlAps","wQIlaVff4EY","f3xe-Wxio1o","R0RNkkd2peE","7MVvkqbXiws","nUUysWuPdAM","uqtNSdDFGBM","xSUuO84BTSA","0tSechjAogk","ApaGQGrGjr8"],["ZxODzxY6AvI","0ZnpiM_a4GE","BS0T8Cd4UhA","NE1OjZtl_oM","C0VrLueyVt8","osn21w7rJpU","gRyflnY93_o","yAkI9QuwyGQ","vn0nZW4W-6Y","m3ff17im8RQ","xD5MfqnkFjY","VyYtglm2sus","cmbSCtl6XVI","hjbPszSt5Pc","kHue-HaXXzg","MEVIxU5zJzM","bPFb0-Cow3U","sgaITiDVvmU","Z0uknBJc8NI","k9YUi3UhEPQ"],["gl5GXArC134","Mf82FfX-wuU","hzyFZcuHmeI","1TPr3h-UDA0","kLLXkYQkPqI","CdcNLBfeTis","6XDV3IwnF8Q","o65l1YAVaYc","q0OtUbDYdxw","6IBArwEOhFM","nJqderdey_I","BncyJxsI1yg","gNiORew3uRY","1haLoJpUNdw","yN-MkRcOJjY","Rh7jmPODgkU","aXFIKTntclY","FS3LcIURelY","dwoEkpuaop4","rshu9eQCdBs"],["xNmf-G81Irs","gRJ_QfP2mhU","Q4yUlJV31Rk","tETcDafA7WY","TBIL2sdfoVc","36m1o-tM05g","n-ni-z0ZdQM","dYCGL9s1L40","-pYtLIhh3m8","1IVZPey0Hq8","tx67UwCrqkU","HHWFLDmv86U","14q7PBZZeOQ","plRjge_3tME","pkDaJwat6ic","h11u3vtcpaY","GNZBSZD16cY","X0ZtPqG7t-A","RRV1vqek3Vk","ox4QG-L8l4I"],["lm2Sf-upS6c","ZxODzxY6AvI","ruAxNpZrYIw","C0VrLueyVt8","Ceih9YDz9-Y","yAkI9QuwyGQ","CxV2QtsotaA","pfLp_05scAI","sK2ooXd9vK0","OgQHKH4Ubi0","q4WOwvwh_zA","osn21w7rJpU","k9YUi3UhEPQ","rfMb1BQfwiM","vn0nZW4W-6Y","imKBpDl4i5o","JlHLVOpLnXo","elJjs2hsugE","njUhZSjXNW0","Kq8ZqVTrOFI"],["s7vQOFMsHX0","B5URuFm4Ew8","aGlRyMITXMc","tawewVeaiBI","V5YdsYJR5Qw","wcBosWg1UfA","zIacSpKqwBU","i2Vuib3G7FM","FU3PjdCU0H8","TQSszp_vIOs","gVRXT_j9sCQ","gb6f1G8NMBU","VsuWIT8HiaQ","USPFB9eX-k0","ZTMyDtHZXIc","JomqvrXhLSk","cFf85n-Im8Q","iAFH2_3o-oo","dRZLLKs9BQg","7q2JCC_i1fY"],["wQIlaVff4EY","-pNTn9cJApg","R0RNkkd2peE","ApaGQGrGjr8","0gUQk2JU5e4","JzkVlQ3nlVM","er-E1vxEnic","SVaD8rouJn0","EgtL5Neb9yU","78ZWoVIsWVQ","HA-_5Xb0M18","TbNymweHW4E","f3xe-Wxio1o","7d6TqmE4dN4","SVm65tlhqw8","dLkyNzFmlHA","jeIHH0XEs6E","Jg7ktpew2Tc","Est3UNs-LIk","CRfv5a9QFu8"],["tawewVeaiBI","7q2JCC_i1fY","gb6f1G8NMBU","ZTMyDtHZXIc","BnSD9jRr2SQ","V5YdsYJR5Qw","R0uJ8dJ_8dg","CnrazBIAMt8","5LiHEPJrO6w","xIASaUUwklk","_HV6F2qAEPE","d2ZNaLQD60Y","cBC-pRFt9OM","Hxq6ou5aiKI","lRRk97FYLJM","Qn-J3q1G7eY","dJDce7wUwDs","QO26am9wCIo","F5-CbvbaW4g","kmJTZsnuzuQ"],["miRaX5gtb4o","rf3nwJgEFC0","Bvh1slwtcHI","ecV7CXWYvAw","aYidBhgA-fQ","JiYlBxVXcJY","ZeQeABFZumg","-enGOMQgdvg","NSG97zCOlyo","B_rGI1uqrG8","_8CcaceAkFI","T1fdtkzrALg","DXy50exHjes","MAcT82nAfZk","vyPYarCidxM","xc0XoKtC9xY","89q_HH-3ghk","KqkQtI9VbUI","uf7t5BeZ3rw","Y_oruZJaTQE"],["NaPBcUUqbew","_uc3xrGBWq8","Y4UT9iBdQDI","HLkSdHNUpxs","VSpFRcTeUQ4","wgSLxl1oAwA","SVaD8rouJn0","nW82fRNJc84","PXHuKn7Qwrg","rjMqMLZIt30","JFiApf_m4H0","HEW-U9a2Avg","x9Jr9JKpsX8","oUhA6fjgnLY","-3H1T3xqzZY","fpRWBdx0tzY","0AHL0OwZvF4","eBPAJERpn6Q","h6zXtq1JW2U","2-mNUcpKOag"],["ZxODzxY6AvI","Ceih9YDz9-Y","C0VrLueyVt8","osn21w7rJpU","OgQHKH4Ubi0","pfLp_05scAI","tEtBsfJbABY","EoyOvG29oxw","elJjs2hsugE","hlXXvebPyCQ","xD5MfqnkFjY","iY-ZOUil85E","OY0l7NqRrYM","NE1OjZtl_oM","PeZeb6stV0c","EKqWZLywvDo","rfMb1BQfwiM","mJLGNmtAdF8","04WRI-0odjk","ooN9q3f9spE"]]'));
	} else {
		var token;
		var apiKey = 'AIzaSyCNlmfQr6EbS6XS9Tk5NAqL7XJ9_ila7X8';

		setupTokens(start);

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
		function start() {
			var numItems = 20;
			makeRequest('get', 'https://www.googleapis.com/youtube/v3/activities?part=contentDetails&maxResults=' + numItems + '&home=true', useHomePageResponse);
		}

		function useHomePageResponse(response) {
			console.log(response);
			var content = response.items.map(function(e) { return extractContent(e.contentDetails); }).filter(function(e) {return (e != undefined);});
			content = deDuplicate(content);
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
				// console.log(JSON.stringify(channels));
				callback(channels);
			});
		}

		function deDuplicate (contentWithDupes) {
			content = [];
			for (var i = 0; i < contentWithDupes.length; i++) {
				var match = false
				for (var j = i+1; j < contentWithDupes.length; j++) {
					if (contentWithDupes[i].video == contentWithDupes[j].video) {
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
			if (e.upload) {
				return {video: e.upload.videoId, source: 'upload'};
			} else if (e.recommendation) {
				return {video: e.recommendation.resourceId.videoId, source: 'recommendation'};
			} else if (e.like) {
				return {video: e.like.resourceId.videoId, source: 'like'}
			} else if (e.bulliten) {
				return {video: e.bulliten.resourceId.videoId, source: 'bulliten'}
			} 
			// Todo: accept playlists
			// else if (e.playlistItem) {
			// 	return {playlist: e.playlistItem.playlistId, source: 'playlistItem'}
			// }
		}

		function setupTokens(callback) {
		  chrome.identity.getAuthToken({ 'interactive': true }, function(newToken) {
		    if (chrome.runtime.lastError) {
		      console.log(chrome.runtime.lastError);
		    } else {
		      console.log('Token acquired:'+newToken);
		      token = newToken;
		      callback();
		    }
		  });
		}
	}
}