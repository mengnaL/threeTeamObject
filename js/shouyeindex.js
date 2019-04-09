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
    })
      
    // 视频
    $('#play').click(function(){
        $('#video').css({"display":"block"});
    })
    $('#vedio_img').click(function(){
        $('#video').css({"display":"none"});
    })
});