$(function(){
    $(".joinNav li").on("click",function(){
        $(this).css({"background":"#1E78E7","transition":"1.5s"}).siblings().css({"background":"white"});
        $(".technologica").eq($(this).index()).show().siblings().hide();
        $(".recruit h3").show();
        
    });

	$(window).on("scroll",function(ev){

		var Event=ev||window.event;
		var sTop=document.body.scrollTop||document.documentElement.scrollTop;

		if(sTop>=900){
			$(".joinNav").css({"position":"fixed","top":0});
            
		}else{
            $(".joinNav").css({"position":"relative"});
		}
	
    });
    var s = true;
    $(".require").on("click",function(){
        if(s){
            $(".require div").hide();
            $(".require div").eq($(this).index()).show();
            $(".require").animate({"height":50});
            $(".require").eq($(this).index()).animate({"height":450});
            s = false;
        }else{
            $(".require div").hide();
            $(".require").animate({"height":50});
            s = true;
        }
    });
});
