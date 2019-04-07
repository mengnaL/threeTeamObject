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
        // $(".photoWall2 .li2").on('hover',function(){
        //     $(".photoWall2 .li2 span").css({"top":0,"transition":"1.5s"})
        //     console.log($(this).index())
        // });
    });