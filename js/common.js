/* 
* @Author: Marte
* @Date:   2016-10-19 16:26:57
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-04 14:54:04
*/

$(document).ready(function(){
    /*添加年龄*/
    var pElement;
    var pElementText;
    for(var i = 0; i < 62; i++){
        pElement = $("<p></p>");
        if( i > 60){
            pElementText = pElement.text("60以上");
            $(".agees").append(pElementText);
        }else{
            pElementText = pElement.text(i);
            $(".agees").append(pElementText);
        }
    }

    $(".receive").click(function(){
        $(".cover").show();
        $(".covers").show();
        $(".register").hide();
    });

    /*点击添加边框颜色 并且改变字体为黑色*/
    function addBorder(className){
        $(className).click(function(){
            $(this).addClass('addBorder');
            $(this).siblings('div').removeClass('addBorder');
            $(this).find('.label1').addClass('addColor');
            $(this).siblings('div').find('.label1').removeClass('addColor');
            $(this).find(".FormbtnGetVer").addClass('addColorLeft');
            $(this).siblings("div").find(".FormbtnGetVer").removeClass("addColorLeft");
            $(this).parent().siblings("div").find(".FormbtnGetVer").removeClass("addColorLeft");
            if($(this).children().hasClass('selLevList')){
                $(".selLevList").stop().slideToggle(500);
            }else{
                $(".selLevList").stop().slideUp(500);
            }
            if($(this).parent().hasClass('sexAndEge')){
                $(this).parent().siblings('div').removeClass("addBorder");
                $(this).parent().siblings('div').find(".label1").removeClass('addColor');
                /*sex 和  age*/
                if($(this).find(".sexes").hasClass('sexes')){
                    $(this).find(".sexes").stop().slideToggle(500);
                }else if($(this).find(".agees").hasClass('agees')){
                    $(this).find(".agees").stop().slideToggle(500);
                }
            }else{
                $(".sex").removeClass('addBorder');
                $(".age").removeClass('addBorder');
                $(".sex").find(".label1").removeClass('addBorder');
                $(".age").find(".label1").removeClass('addBorder');
            }
        })
    };
    addBorder(".formName");
    addBorder(".EngLishLev");
    addBorder(".FormPhone");
    addBorder(".sex");
    addBorder(".age");
    addBorder(".FormVerCode");

    /*下拉选项*/
    $(".selLevList p").click(function(){
        $("#LevText").text($(this).text());
        $(".selLevList").slideUp(500);
    });
    $(".sexes p").click(function(){
        $("#sexText").text($(this).text());
        $(".sexes").slideUp(500);
    });
    $(".agees p").click(function(){
        $("#ageText").text($(this).text());
        $(".agees").slideUp(500);
    });

    /*关闭弹窗*/
    $(".closeBtn").click(function(){
        $(".covers").hide();
        $(".cover").hide();
        $("#formName").val("");
        $("#LevText").text("");
        $("#formPhone").val("");
        $("#sexText").text("");
        $("#ageText").text("");
        $("#formName1").val("");
        $("#LevText1").text("");
        $("#formPhone1").val("");
        $("#topCode").val("");
        $("#sexText1").text("");
        $("#ageText1").text("");
    });

    /*登录注册*/
    $(".login").click(function(){
        $(".cover").show();
        $(".register").show();
    });
    /*点击登陆*/
    $(".addTabColorBg").click(function(){
        $(".tabRegHead p").removeClass('addTabColorBg');
        $(this).addClass('addTabColorBg');
        $(".enrollText").hide();
        $(".signText").show();
    });

    /*点击注册*/
    $(".enroll").click(function(){
        $(".tabRegHead p").removeClass('addTabColorBg');
        $(this).addClass('addTabColorBg');
        $(".signText").hide();
        $(".enrollText").show();
    });

    /*点击关闭*/
    $(".registerHead img").click(function(){
        $(".cover").hide();
        $(".phoneName input").val("");
        $(".phoneNumber input").val("");
        $(".pushPassword input").val("");
        $(".verCode input").val("");
        $(".register .actionSuce").show();
        $(".register .sucessAct").hide();
        $(".register").hide();
        $('.errors').hide();
    });

    /*点击关闭*/
    $(".coverNext .closeButton").click(function(){
        $(".cover").hide();
        $(".coversContent").show();
        $(".coverNext").hide();
        $("#formName").val("");
        $("#LevText").text("");
        $("#formPhone").val("");
        $("#sexText").text("");
        $("#ageText").text("");
        $("#formName1").val("");
        $("#LevText1").text("");
        $("#formPhone1").val("");
        $("#topCode").val("");
        $("#sexText1").text("");
        $("#ageText1").text("");
        $(".covers").hide();
    });


    /*侧边栏*/
    var intter;
    /*
    if($(window).width() >= 980){
        var boxEle = $(".rNav ul li").eq(2);
        $(document).scroll(function(){
            if($(document).scrollTop() >= 80){
                $(".rightNav").show();
            }else{
                $(".rightNav").hide();
            }
        });
        $(".rNav ul li").mouseenter(function(){
            $(".lNav").show();
            if($(this).index() != 2){
                $(this).addClass("boxShowes");
                $(".lNav ul li").eq($(this).index()).show();    
            }else{
                $(".lNav ul li").eq(2).hide();
                $(this).find("img").attr({"src":"studenthome/images/load.png"});
            }
        });
        $(".rNav ul li").mouseleave(function(){
            $(".lNav").hide();
            if($(this).index() != 2){
                $(".rNav ul li").removeClass("boxShowes");
                $(".lNav ul li").hide();
            }else{
                $(".rNav ul li").eq(2).find("img").attr({"src":"studenthome/images/pc.png"});
            }
        });    
    }else{
        $(".rightNav").hide();
    }
    */
    
    /*关闭按钮**/
    $(".sucessAct .downBtn").click(function(){
        $(".cover").hide();
        $(".phoneNumber input").val("");
        $(".pushPassword input").val("");
        $(".verCode input").val("");
        $(".register .actionSuce").show();
        $(".register .sucessAct").hide();
        $(".register").hide();
        $('.errors').hide();
    });
    /*关闭按钮**/
    $(".sucessAct .closeButton").click(function(){
        $(".cover").hide();
        $(".phoneNumber input").val("");
        $(".pushPassword input").val("");
        $(".verCode input").val("");
        $(".register .actionSuce").show();
        $(".register .sucessAct").hide();
        $(".register").hide();
        $('.errors').hide();
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

    //头部字数限制
    if($(".header .button").find(".fr").text().trim().length > 16){
        $(".header .button").find(".fr").text($(".header .button").find(".fr").text().trim().substring(0,10)+"...");
    } 

    //窗口大小<=980时
    // if(window.innerWidth < 980){
    //     $(".rightNav").hide(0); 
    //     $(".lNav").hide(0); 
    //     $(".rNav").hide(0); 
    // }
    // console.log(window.innerWidth);
    /*
    $(window).resize(function(event) {
        console.log($(window).width());
        if($(window).width() <= 980){
            $(".rightNav").hide();
        }else{
            $(".rightNav").show();
        }
    });
    */
});