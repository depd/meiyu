/* 
* @Author: Marte
* @Date:   2016-10-24 15:40:27
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-19 10:09:38
*/

$(document).ready(function(){
    /* 头部轮播 */
    var LiWidth = $(".toplunUl li").width();
    // $(window).resize(function() {
    //     clearInterval(inter);
    //     LiWidth = $(".toplunUl li").width();
    //     console.log(LiWidth);
    //     $(".lunbosList ul li").width(LiWidth);
    //     console.log($(".lunbosList ul li").width());
    // });
    var marginLeft = 0;
    var inter;
    var liIndex;
    $(".lunbosList ul li").eq(0).find("img").attr({
        "src":$(".lunbosList ul li").eq(0).find("img").attr("src").replace(/z/,"c")
    });
    function clickR(){
        if(marginLeft > -LiWidth*4 && marginLeft <= 0){
            marginLeft -= LiWidth;
            $(".toplunUl").stop().animate({
                "margin-left": marginLeft
            },1000,function(){
                if(marginLeft == -LiWidth*4){
                    marginLeft = 0;
                    $(".toplunUl").css({
                        "margin-left":0
                    });
                }
            });
            for(var i = 0; i < $(".lunbosList ul li").length; i++){
                if( i != $(this).index()){
                    $(".lunbosList ul li").eq(i).find("img").attr({
                        "src":$(".lunbosList ul li").eq(i).find("img").attr("src").replace(/c/,"z")
                    }) 
                }else{
                    continue;
                }
            }
            liIndex = Math.abs(marginLeft/LiWidth);
            if(liIndex == 4){
                liIndex = 0;
                $(".lunbosList ul li").eq(liIndex).find("img").attr({
                    "src":$(".lunbosList ul li").eq(liIndex).find("img").attr("src").replace(/z/,"c")
                });    
            }else{
                $(".lunbosList ul li").eq(liIndex).find("img").attr({
                    "src":$(".lunbosList ul li").eq(liIndex).find("img").attr("src").replace(/z/,"c")
                });
            }
        }  
    };
    function clickL(){
        if(marginLeft >= 0){
            marginLeft = -LiWidth*4;
            $(".toplunUl").css({
                "margin-left":marginLeft
            });
        }
        if(marginLeft >= -LiWidth*4 && marginLeft < 0){
            marginLeft += LiWidth;
            $(".toplunUl").stop().animate({
                "margin-left": marginLeft
            },1000); 
        for(var i = 0; i < $(".lunbosList ul li").length; i++){
                if( i != $(this).index()){
                    $(".lunbosList ul li").eq(i).find("img").attr({
                        "src":$(".lunbosList ul li").eq(i).find("img").attr("src").replace(/c/,"z")
                    }) 
                }else{
                    continue;
                }
            }
            liIndex = Math.abs(marginLeft/LiWidth);
            if(liIndex == 4){
                liIndex = 0;
                $(".lunbosList ul li").eq(liIndex).find("img").attr({
                    "src":$(".lunbosList ul li").eq(liIndex).find("img").attr("src").replace(/z/,"c")
                });    
            }else{
                $(".lunbosList ul li").eq(liIndex).find("img").attr({
                    "src":$(".lunbosList ul li").eq(liIndex).find("img").attr("src").replace(/z/,"c")
                });
            }
        };
    };
    $(".btnRight").click(function(){
        clearInterval(inter);
        clickR();       
    });
    $(".btnLeft").click(function(){
        clearInterval(inter);
        clickL();
    });

    /*定时器轮播*/
    inter = setInterval(function(){
        clickR()
    },4000);
    $(".toplun").hover(function(){
        clearInterval(inter);
        $(".lunboBtn img").show();
    },function(){
        inter = setInterval(function(){
            clickR()
        },4000);
        $(".lunboBtn img").hide();
    });

    /*点击图标调到跳转并且变换相应的图片*/
    $(".lunbosList ul li").hover(function(){
        clearInterval(inter);
        /*$(".lunboBtn img").eq(0).attr({"src":"images/btnhleft.png"});
        $(".lunboBtn img").eq(1).attr({"src":"images/btnhright.png"});*/
    },function(){
        inter = setInterval(function(){
            clickR()
        },4000);
        /*$(".lunboBtn img").eq(0).attr({"src":"images/btnnleft.png"});
        $(".lunboBtn img").eq(1).attr({"src":"images/btnnright.png"});*/
    });
    $(".lunbosList ul li").click(function(){
        $(".toplunUl").stop().animate({
            "margin-left":-$(this).index()*LiWidth
        });
        for(var i = 0; i < $(".lunbosList ul li").length; i++){
            if( i != $(this).index()){
                $(".lunbosList ul li").eq(i).find("img").attr({
                    "src":$(".lunbosList ul li").eq(i).find("img").attr("src").replace(/c/,"z")
                }) 
            }else{
                continue;
            }
        }
        $(this).find("img").attr({"src":$(this).find("img").attr("src").replace(/z/,"c")});
    });

    /* 添加阴影色 */
    $(".teamIntro ul li").mouseenter(function(){
        $(".teamIntro ul li").find("dt").removeClass('addBox');
        $(".teamIntro ul li").find("dd").removeClass('addBox');
        $(this).find("dt").addClass("addBox");
        $(this).find("dd").addClass("addBox");
    });
    var oImg4 = document.getElementById('img4');
    var oText4 = document.getElementById('text4');
    window.addEventListener('scroll',function(){
        var oTop = document.documentElement.scrollTop||document.body.scrollTop;
        var oClient = document.documentElement.clientHeight||document.body.clientHeight;
        if((oTop+oClient)>(oImg4.offsetTop)){
            oImg4.style.transform = "translateX(0)";
            oImg4.style.opacity = "1";
        }
    },false)
    window.addEventListener('scroll',function(){
        var oTop = document.documentElement.scrollTop||document.body.scrollTop;
        var oClient = document.documentElement.clientHeight||document.body.clientHeight;
        if((oTop+oClient)>(oText4.offsetTop)){
            oText4.style.transform = "translateX(0)";
            oText4.style.opacity = "1";
        }
    },false);

    /*点击了解更多*/
    $(".knowMore").click(function(){
        $(".cover").show();
        $(".register").show();
    });

    /*下拉选项*/
    $("#text4 .selLevList p").click(function(){
        $("#LevText1").text($(this).text());
    });
    $("#text4 .sexes p").click(function(){
        $("#sexText1").text($(this).text());
    });
    $("#text4 .agees p").click(function(){
        $("#ageText1").text($(this).text());
    }); 
});