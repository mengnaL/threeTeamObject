// var screenYY=window.screenY;//FireFox相对于屏幕的y坐标
//   //event事件问题
//   document.onclick=function(ev){//谷歌火狐的写法，IE9以上支持，往下不支持；
//     var e=ev;
//     console.log(e);
//   }
//   document.onclick=function(){//谷歌和IE支持，火狐不支持；
//     var e=event;
//     console.log(e);
//   }
//   document.onclick=function(ev){//兼容写法；
//     var e=ev||window.event;
//     var mouseX=e.clientX;//鼠标X轴的坐标
//     var mouseY=e.clientY;//鼠标Y轴的坐标
//   }
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
		$('#B-ul li').click(function(){
			var index = $(this).index();
			$('#B-ul li img').eq(index).addClass("action");
			$('#B-ul li span').eq(index).addClass("active");
			$('#B-search div').eq(index).show().siblings('#B-search div').hide();
			$('#B-ul li').click(function(){
				$('#B-ul li img').eq(index).removeClass("action");
				$('#B-ul li span').eq(index).removeClass("active");
			})
		})
	})
})