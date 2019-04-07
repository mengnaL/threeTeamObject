$(function(){
// 划上显示效果
    $('.U-one').hover(function(e){
		$('.one').stop(true).slideToggle();
	});
	$('.U-two').hover(function(e){
		$('.two').stop(true).slideToggle();
	});
	$('.U-three').hover(function(e){
		$('.three').stop(true).slideToggle();
	});
// 地区
	$('.pull .button').click(function(){
		$('.pull ul').show();
	});
	$('.pull ul li').click(function(){
		$('.pull ul').hide();
	})

	// 登录
	$('.register span').click(function(){
		var index = $(this).index();
		$(this).addClass("tabhover").siblings('span').removeClass("tabhover");
		$('.register div').eq(index).show().siblings('.register div').hide();
	})

// 正则判断
	// 账号
	$(".user").blur(function(){
		var $user=$(".user");
		if(!/^[a-z0-9]+$/ig.test($user.val())){
			$(".account i").show();
			$(".account i").html("非汉字");
		}else if ($user.val=="") {
			$(".account i").show();
			$(".account i").html("不能为空");
		}else{
			$(".account i").show();
			$(".account i").html("√");
		}
	})
	$(".shouji").blur(function(){
		var $shouji=$(".shouji");
		if(!/^1[34578]{1}\d{9}$/ig.test($shouji.val())){
			$(".ii").show();
			$(".ii").html("格式错误");
		}else if ($shouji.val=="") {
			$(".ii").show();
			$(".ii").html("不能为空");
		}else{
			$(".ii").show();
			$(".ii").html("√");
		}
	})
	// 密码
	$(".password").blur(function(){
		var $password=$(".password");
		 if ($password.val=="") {
			$(".i").html("不能为空");
		}else{
			$(".i").html("√");
		}
	})


// 帮助中心
	$('#B-ul li').click(function(){
		var index = $(this).index();
		$('#B-ul li img').eq(index).addClass("action").siblings().removeClass("action");
		console.log($(this),index)
		$('#B-ul li span').eq(index).addClass("active").siblings('#B-ul li span').removeClass("active");
		$('#B-search div').eq(index).show().siblings('#B-search div').hide();
	})
})