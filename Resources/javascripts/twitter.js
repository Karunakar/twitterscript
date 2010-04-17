var Twitter = new function(){
	// Private Global method
	var login 

			//Private method for the make_base64_auth(user, password)

			 function make_base64_auth(username, password) {
				var ok = username + ':' + password;
				var hash = Base64.encode(tok);
				return "Basic " + hash;
				}

			//Public Section started here as per basic javascript OOPS
			return {
				login: function(username,password)
			}

}

