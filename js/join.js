$(function(){
    $(".joinNav li").on("click",function(){
        $(this).css({"background":"blue","transition":"1.5s"}).siblings().css({"background":"white"});
        // $(".technologica").head();
        $(".technologica").eq($(this).index()).show().siblings().hide();
        $(".recruit h3").show();
        
    })
});
