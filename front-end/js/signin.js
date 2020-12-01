/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=index
*/
function signin() {
 
    var username = document.getElementById("username1");
    var pass = document.getElementById("password1");
	var email = document.getElementById("email");
    var phone = document.getElementById("phone");
	

	 $.ajax({
		type: "GET",
		dataType: "json",
		url: 'http://127.0.0.1:9090',
		contentType: "application/json",
		data:JSON.stringify({
			"username": username.value,
			"pass": pass.value,
			"email": email.value,
			"phone": phone.value,
		}),	
		success: function (result) {
			console.log("data is :" + result)
			if (result.code == 200) {
				alert("提交成功");
				window.location.href="index.html";// if success then come back to login page
			}else {
				alert(result.message)
				alert("other problem")
			}
		}
	});
    
}