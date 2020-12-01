function deleteNewLine(id){
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
