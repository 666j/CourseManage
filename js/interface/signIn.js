$(document).ready(function(){
	Login();
	
});
function Login(){
	var teacher_id=$("#teacher_id").val();
	var teacher_pass=$("#teacher_password").val();
	var data_info={"teacher_id":teacher_id,"teacher_pass":teacher_pass};
	$.ajax({
		type:"post",
		url:"/tLogin",
		async:true,
		data:data_info,
		success:function(data){
			if(data == 1){
				window.location.href="adminIndex.html";
			}else if(data ==2){
				window.location.href ="teacherIndex.html";
			}else{
				alert("登陆失败");
			}
		}
	});
}
