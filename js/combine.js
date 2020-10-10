
        function combine() {
			window.location.href="restart.html";
            var name = document.getElementById("name").value;
            var gender = document.getElementById("gender").value;
            $.ajax({
                type: "POST",
                dataType: "json",
                url: '/test',
                contentType: "application/json",
                data:JSON.stringify({
                    "name": name,
                    "gender": gender,
                }),	
                success: function (result) {
                    console.log("data is :" + result)
                    if (result.code == 200) {
                        alert("提交成功");
                        
                    }else {
                        alert(result.message)
                    }
                }
            });
        }

