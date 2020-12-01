/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=index
*/
function login() {
 
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
 
    if (!username.value ) {
 
        alert("请输入用户名");
 
    } else if (pass.value  == "") {
 
        alert("请输入密码");
 
    //} else if(username.value == "admin" && pass.value == "123456"){
 
       // window.location.href="welcome.html";
 
    //} else {
 
      //  alert("请输入正确的用户名和密码！")
 
    }
	
		 $.ajax({
		type: "GET",
		dataType: "json",
		url: 'http://127.0.0.1:9090',
		contentType: "application/json",
		data:JSON.stringify({
			"username": username.value,
			"pass": pass.value,

		}),	
		success: function (result) {
			console.log("data is :" + result)
			if (result.code == 200) {
				alert("提交成功");
				window.location.href="form.html";// if success then come back to login page
			}else {
				alert(result.message)
				alert("other problem")
			}
		}
	});
	
}