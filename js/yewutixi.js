$(function(){
	// 陌陌游戏tab切换
	$('#change li').click(function(){
	    var index = $(this).index();
	    $(this).addClass('active').siblings().removeClass('active');
	    $('#change_div div').eq(index).show().siblings('#change_div div').hide();
    })
})
