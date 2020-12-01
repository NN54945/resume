var a = 0;
//添加一行
 function addNewLine(){
	++a;
	var tar = " <div style=\"float: center;\" id=\"divLine_" + a + "\"  > ";


	tar += " <input type=\"hidden\" id=\"awId_" +a+ "\" name=\"awId_" +a+"\"  />";
	
	tar += " <span style=\"float: center;color: red;\">(可选)</span>";	
	tar += "<p><label class=\"label_input\">工作时段:</label><input type=\"text\" id=\"work_time"+a+"\" class=\"text_field\" value=\"2020.09-2020.11\"/></p>"
	
	tar += " <span style=\"float: center;color: red;\">(可选)</span>";	
	tar += "<p><label class=\"label_input\">公司名称:</label><input type=\"text\" id=\"company_name"+a+"\" class=\"text_field\" value=\"荣耀终端公司\"/></p>"
	
	tar += " <span style=\"float: center;color: red;\">(可选)</span>";	
	tar += "<p><label class=\"label_input\">职位:</label><input type=\"text\" id=\"position"+a+"\" class=\"text_field\" value=\"公关\"/></p>"
	
	tar += " <span style=\"float: center;color: red;\">(可选)</span>";	
	tar += "<p><label>工作描述 :</label> <textarea id=\"descript"+a+"\" name=\"description"+a+"\" >负责拆分荣耀终端公司</textarea></p>"			
	
	tar += " <span style=\"float: center;color: red;\">(可选)</span>";	
	tar += "<p><label class=\"label_input\">项目时段:</label><input type=\"text\" id=\"project_time"+a+"\" class=\"text_field\" value=\"2020.09-2020.10\"/></p>"			
				
	tar += " <span style=\"float: center;color: red;\">(可选)</span>";	
	tar += "<p><label class=\"label_input\">项目名称:</label><input type=\"text\" id=\"project_name"+a+"\" class=\"text_field\" value=\"草拟对美国政府起诉书\"/></p>"			
				
	
				
	tar += "<br/>";
	//tar += "  <a href=\"###\" class=\"a1\" id=\"deleteLine\" " +a+ "  οnclick=\"deleteNewLine('divLine_"+a+"')\">删除</a>";
	tar += "<br/>";
	tar += "</div>";
	
	$("#addChildDiv").append(tar); 
} 
        function combine() {
			//window.location.href="restart.html";
            var name = document.getElementById("name").value;
            var gender = document.getElementById("gender").value;
			var age = document.getElementById("age").value;
			var birthday = document.getElementById("birthday").value;
			var work_time0 = document.getElementById("work_time0").value;
			var phone_number = document.getElementById("phone_number").value;
			var introduction = document.getElementById("introduction").value;
			var college_time = document.getElementById("college_time").value;
			var college_name = document.getElementById("college_name").value;
			var major = document.getElementById("major").value;
			var work_time = document.getElementById("work_time").value;
			var company_name = document.getElementById("company_name").value;
			var position = document.getElementById("position").value;
			var descript = document.getElementById("descript").value;
			var project_time = document.getElementById("project_time").value;
			var project_name = document.getElementById("project_name").value;
			var language = document.getElementById("language").value;
			var degree = document.getElementById("degree").value;
			var time = document.getElementById("time").value;
			var qualify = document.getElementById("qualify").value;
			
			if (a>=1){
			var work_time1 = document.getElementById("work_time1").value;
			var company_name1 = document.getElementById("company_name1").value;
			var position1 = document.getElementById("position1").value;
			var descript1 = document.getElementById("descript1").value;
			var project_time1 = document.getElementById("project_time1").value;
			var project_name1 = document.getElementById("project_name1").value;
			}
			
            if (a==1){$.ajax({
                type: "GET",
                dataType: "json",
                url: 'http://127.0.0.1:9090',
                contentType: "application/json",
                data:JSON.stringify({
		"template":"url",
		"relation":
		{
			"arr":
			[{
				"arr_key":"自我评价",	
				"json_arr_key":"arr1",
				"data":
				{
					"introduction":"self_introduction"
				}
			 },
			 {
				"arr_key":"教育经历",	
				"json_arr_key":"arr2",
				"data":
				{
					"college_name":"院校名称",
					"college_time":"在校时间",
					"degree":"教育程度",
					"major":"专业"
				}
			},
			{
				"arr_key":"工作经历",	
				"json_arr_key":"arr3",
				"data":
				{
					"work_time":"工作时间",
					"company_time":"公司名称",
					"position":"职位",
					"descrip":"工作描述"
				}
			},
			{
				"arr_key":"项目经验",	
				"json_arr_key":"arr4",
				"data":
				{
					"project_time":"项目时间",
					"project_name":"项目名称",
					"descrip":"项目描述"
				}
			},
			{
				"arr_key":"语言能力",	
				"json_arr_key":"arr5",
				"data":
				{
					"language":"语言",
					"degree":"等级"
				}
			 },
			 {
				"arr_key":"证书",	
				"json_arr_key":"arr6",
				"data":
				{
					"qualify":"证书名称",
					"time":"获取时间"
				}
			 }
			],
			"data":{
				"name":"姓名",
				"age":"年龄",
				"gender":"性别",
				"birthday":"生日",
				"work_time":"工作年限",
				"phone_number":"联系方式"
			}
		},
		"source":{
			"姓名":name,
			"年龄":age,
			"性别":gender,
			"生日":birthday,
			"工作年限":work_time0,
			"联系方式":phone_number,
			"arr1":[
				{
				"self_introduction":introduction
				}
			],
			"arr2":[
				{
					"院校名称":college_name,
					"在校时间":college_time,
					"教育程度":degree,
					"专业":major
				}
			],
			"arr3":[
				{
					"工作时间":work_time,
					"公司名称":company_name,
					"职位":position,
					"工作描述":descript
				},
				{
					"工作时间":work_time1,
					"公司名称":company_name1,
					"职位":position1,
					"工作描述":descript1
				}
			],
			"arr4":[
				{
					"项目时间":project_time,
					"项目名称":project_name,
					"项目描述":"负责公司与政府、社会大众关系处理"
				},
				{
					"项目时间":project_time1,
					"项目名称":project_name1,
					"项目描述":"abcde"
				}
			],
			"arr5":[
				{
					"语言":language,
					"等级":degree
				},
				{
					"语言":"汉语",
					"等级":"精通"
				}				
			],
			"arr6":[
				{
					"证书名称":time,
					"获取时间":qualify
				}
			]
		}
	}
				),	
                success: function (result) {
                    console.log("data is :" + result)
                    if (result.code == 200) {
                        alert("提交成功");
                        window.location.href="restart.html";// if success
                    }else {
                        alert(result.message)
                    }
                }
            });}
		else{
			$.ajax({
                type: "GET",
                dataType: "json",
                url: 'http://127.0.0.1:9090',
                contentType: "application/json",
                data:JSON.stringify({
		"template":"url",
		"relation":
		{
			"arr":
			[{
				"arr_key":"自我评价",	
				"json_arr_key":"arr1",
				"data":
				{
					"introduction":"self_introduction"
				}
			 },
			 {
				"arr_key":"教育经历",	
				"json_arr_key":"arr2",
				"data":
				{
					"college_name":"院校名称",
					"college_time":"在校时间",
					"degree":"教育程度",
					"major":"专业"
				}
			},
			{
				"arr_key":"工作经历",	
				"json_arr_key":"arr3",
				"data":
				{
					"work_time":"工作时间",
					"company_time":"公司名称",
					"position":"职位",
					"descrip":"工作描述"
				}
			},
			{
				"arr_key":"项目经验",	
				"json_arr_key":"arr4",
				"data":
				{
					"project_time":"项目时间",
					"project_name":"项目名称",
					"descrip":"项目描述"
				}
			},
			{
				"arr_key":"语言能力",	
				"json_arr_key":"arr5",
				"data":
				{
					"language":"语言",
					"degree":"等级"
				}
			 },
			 {
				"arr_key":"证书",	
				"json_arr_key":"arr6",
				"data":
				{
					"qualify":"证书名称",
					"time":"获取时间"
				}
			 }
			],
			"data":{
				"name":"姓名",
				"age":"年龄",
				"gender":"性别",
				"birthday":"生日",
				"work_time":"工作年限",
				"phone_number":"联系方式"
			}
		},
		"source":{
			"姓名":name,
			"年龄":age,
			"性别":gender,
			"生日":birthday,
			"工作年限":work_time1,
			"联系方式":phone_number,
			"arr1":[
				{
				"self_introduction":introduction
				}
			],
			"arr2":[
				{
					"院校名称":college_name,
					"在校时间":college_time,
					"教育程度":degree,
					"专业":major
				}
			],
			"arr3":[
				{
					"工作时间":work_time,
					"公司名称":company_name,
					"职位":position,
					"工作描述":descript
				}
			],
			"arr4":[
				{
					"项目时间":project_time,
					"项目名称":project_name,
					"项目描述":"负责公司与政府、社会大众关系处理"
				},
				{
					"项目时间":"2019.2.3-2020.2.3",
					"项目名称":"xx平台设计项目",
					"项目描述":"abcde"
				}
			],
			"arr5":[
				{
					"语言":language,
					"等级":degree
				},
				{
					"语言":"汉语",
					"等级":"精通"
				}				
			],
			"arr6":[
				{
					"证书名称":time,
					"获取时间":qualify
				}
			]
		}
	}
				),	
                success: function (result) {
                    console.log("data is :" + result)
                    if (result.code == 200) {
                        alert("提交成功");
                        window.location.href="restart.html";// if success
                    }else {
                        alert(result.message)
                    }
                }
            });
		}
		alert("信息录入成功！")
		window.location.href="restart.html";	
        }



//删除一行
/* function deleteNewLine(id){
	$.dialog.confirm("警告：删除不可恢复，确认要删除吗？",function(){
		var d=$.dialog.tips('正在删除内容，请稍候...',1,'loading.gif');
		//获取hidden
		var line = $("div#"+id+" input[type=hidden]");
		//获取值
		var awId = line.val();
		if($.trim(awId)==""){
			//判断出是手动添加的，只需要删除该行就可以
			$("div#"+id+" ").remove();
		}else{
			//否则需要去删除内容
		   $.ajax({
			type:'post',
			data:{"awId":awId},
			url:'${root}/base/BaseAreaWorkSpace/deleteChild.jspx?date='+new Date().getTime(),
			async:false,
			dataType:"json",
			success:function(data){
				$.dialog.tips(data.message,2,'alert.gif',function(){});
				//重新加载内容
				createChild($("#myId").val(),$("#myName").val(),$("#myCode").val());
			}
		})   
		}
	},function(){});
}

var vmV2;
 
vmV2 = new Vue({
    el: '#pcV2',
    data: {
        options: [{
            value: '选项1',
            label: '当选安徽省政协委员、常委及专委会职务情况'
        }, {
            value: '选项2',
            label: '当选人大、政协、党派、群众团体、委员等情况'
        }],
       
        electionData: [],
       
    },
    methods: {
        addElection() {
            this.electionData.push({});
        },
        deleteRowElection(index) {
            this.electionData.splice(index, 1);
        },
      
    }
 
}) */