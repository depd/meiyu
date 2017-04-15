/* 
* @Author: Marte
* @Date:   2016-10-25 11:51:29
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-26 11:11:24
*/

$(document).ready(function(){
    /*数字跳转*/

    $(document).scroll(function() {
        if ($(document).scrollTop() >= 800 && $(document).scrollTop() <= 2100) {
            timer('n1', getNum('n1'), 2, true);
            timer('n2', getNum('n2'), 0, true);
            timer('n3', getNum('n3'), 0, true);
            timer('n4', getNum('n4'), 0, true);

            timer('n5', getNum('n5'), 1, true);
            timer('n6', getNum('n6'), 8, true);
            timer('n7', getNum('n7'), 0, true);
            timer('n8', getNum('n8'), 0, true);

            timer('n9', getNum('n9'), 1, true);
            timer('n10', getNum('n10'), 3, true);
            timer('n11', getNum('n11'), 0, true);
            timer('n12', getNum('n12'), 0, true);

            timer('n13', getNum('n13'), 1, true);
            timer('n14', getNum('n14'), 3, true);
            timer('n15', getNum('n15'), 0, true);
            timer('n16', getNum('n16'), 0, true);
        } else {
            document.getElementById('n1').innerText = 6;
            document.getElementById('n2').innerText = 7;
            document.getElementById('n3').innerText = 8;
            document.getElementById('n4').innerText = 9;

            document.getElementById('n5').innerText = 8;
            document.getElementById('n6').innerText = 9;
            document.getElementById('n7').innerText = 4;
            document.getElementById('n8').innerText = 3;

            document.getElementById('n9').innerText = 6;
            document.getElementById('n10').innerText = 6;
            document.getElementById('n11').innerText = 4;
            document.getElementById('n12').innerText = 2;

            document.getElementById('n13').innerText = 8;
            document.getElementById('n14').innerText = 6;
            document.getElementById('n15').innerText = 4;
            document.getElementById('n16').innerText = 4;
        }
    })

    function getNum(id) {
        return parseInt(document.getElementById(id).innerText);
    }

    function timer(id, num, numObj, bool) {
        var timer = setInterval(function() {
            document.getElementById(id).innerText = num;
            if (num === numObj) {
                clearInterval(timer);
            } else {
                if (bool) {
                    num--;
                } else {
                    num++;
                }
            }
        }, 100);
    }

    /*添加阴影色*/
    $(".goodTeacher ul li").mouseenter(function(){
        $(".goodTeacher ul li").removeClass("addBoxShadow");
        $(this).addClass("addBoxShadow");
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
    },false)
});