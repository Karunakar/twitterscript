var Twitter = new function(){
	// Private Global method
	var login 

			//Private method for the make_base64_auth(user, password)

			 function make_base64_auth(username, password) {
				var ok = username + ':' + password;
				var hash = Base64.encode(ok);
				return "Basic " + hash;
				}

			//Public Section started here as per basic javascript OOPS
			return {
				login: function()
				{
					Titanium.API.debug("This is a debug message");
					var username = $('#username').val();
					var password = $('#password').val();
					var auth =  make_base64_auth(username, password);
					var url = "http://twitter.com/account/verify_credentials.json";
					
					// I cud't understand the req.setRequestHeader
					// Need to get the clear idea on it
					// Just copied from the Jquery docs now..
					// TO DO:: need to try without before send
					$.ajax({
						url: url,
						method: 'GET',
						datatype: 'json',
						beforeSend: function (req) {
							req.setRequestHeader('Authorization', auth);
						},
						success: function(json,textStatus)
						{
							alert("Sucess ful Authentication");
						},
						error: function(XMLHttpRequest, textStatus, errorThrown)
						{
							alert("Invalid UserName/PAssword");
						},
					});


				},
			}

}

/*

$.ajax({
						url: url,
						method: 'GET',
						datatype: 'json',
						success: function(json,textStatus)
						{
							alert("Sucess ful Authentication");
						},
						error: function(XMLHttpRequest, textStatus, errorThrown)
						{
							alert("Invalid UserName/PAssword");
						},
					});*/

