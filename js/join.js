$(function(){
   
    $(".joinNav li").on("click",function(){
        $(this).css({"background":"#1E78E7","transition":"1.5s"}).siblings().css({"background":"white"});
        $(".technologica").eq($(this).index()).show().siblings().hide();
        $(".recruit h3").show();
    });
   
    $(".require").on("click",function(){
        $(".require div").html("");
        $(".require").stop().animate({"height":50});
        console.log(1)
        $(this).animate({"height":450});
        $(this).append("<div><p>岗位职责:</p><p>1、负责系统日常运维和监控；</p><p>2、推动及开发高效的自动化运维、管理工具，提升运维工作效率；</p><p>3、制定和优化运维解决方案，包括但不限于柔性容灾、智能调度、弹性扩容与防攻击；</p><p>4、探索、研究新的运维技术方向。</p><p>岗位要求:</p><p>1、本科及以上学历，三年以上的Linux系统使用和管理经验；</p><p>2、熟悉 Linux 操作系统原理、TCP/IP 以及常用RPC协议；</p><p>3、熟悉脚本语言Bash/Python等脚本语言的一种并有相关开发经验；</p><p>4、熟悉常见应用配置及优化，如Nginx/Haproxy/MySQL/DNS/Redis/MongoDB等；</p><p>5、熟悉常用的监控系统，如 Zabbix、Nagios 和 Ganglia 等；</p><p>6、具有良好的的沟通、执行能力和强烈的责任心；</p><p>7、在开源社群活跃并有积极贡献者优先。</p><p>应聘此职位，投递简历至：hr#immomo.com （把#换成@）</p><p>简历投递格式请以“应聘职位+姓名”作为邮件标题。</p></div>");
        $(".require div").addClass(".appends");
        if($(this).height()==450){
            console.log(2)
            $(".require div").html("");
            $(this).stop().animate({"height":50});
            // s = false;
        }else{
            // s = true;
        }
       
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
   
});
