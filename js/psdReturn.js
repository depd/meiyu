/* 
* @Author: Marte
* @Date:   2016-10-28 16:13:10
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-31 14:04:03
*/

$(document).ready(function(){
    var times = 60;
    var inter;
    $(".veriImg").click(function(){
        $(".veriImg").attr("disabled", true);
        clearInterval(inter);
        /*$(".veriImg").attr({"disabled":"disabled"});*/
        console.log("A");
        inter = setInterval(function(){
            if(times > 0){
                $(".veriImg").addClass('addbackground');
                $(".veriImg").text("("+times+"s)后再次获取");
                $(".veriImg").attr("disabled", true);
                times -= 1;
            }else{
                clearInterval(inter);
                $(".veriImg").removeClass("addbackground");
                $(".veriImg").text("点击获取");   
                $(".veriImg").attr("disabled", false);
                times = 60; 
            }
        }, 1000);
    });

    /*成功换页面*/
    $(".sureBtn").click(function(){
        $(".centerContent").hide();
        $(".rightReturn").show();
    })
});