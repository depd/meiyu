var oP1 = document.getElementsByClassName("p1");
// var oP2 = document.getElementById('p2');
// var oP3 = document.getElementById('p3');
var oBg = document.querySelector('.con1-box .show-bg');
var oBg1 = document.querySelector('.con1-box .show-con');
var picPosition = 0;
oP1.onmouseover = function(){
	this.style.fontSize = "20px";
	oP2.style.fontSize = "16px";
	oP3.style.fontSize = "16px";
	oBg.style.background = 'url(images/tsb1.png)';
	oBg1.style.background = 'url(images/ts11.png)';
}
// oP2.onmouseover = function(){
// 	this.style.fontSize = "20px";
// 	oP1.style.fontSize = "16px";
// 	oP3.style.fontSize = "16px";
// 	oBg.style.background = 'url(images/tsb2.png)';
// 	oBg1.style.background = 'url(images/ts12.png)';
// }
// oP3.onmouseover = function(){
// 	this.style.fontSize = "20px";
// 	oP1.style.fontSize = "16px";
// 	oP2.style.fontSize = "16px";
// 	oBg.style.background = 'url(images/tsb3.png)';
// 	oBg1.style.background = 'url(images/ts13.png)';
// }

var Timer = setInterval(function(){
	picPosition-=3;
	oBg1.style.backgroundPositionX = picPosition+"px";
},30);
oBg1.onmouseover = function(){
	clearInterval(Timer);
};
oBg1.onmouseout = function(){
	Timer = setInterval(function(){
		picPosition-=3;
		oBg1.style.backgroundPositionX = picPosition+"px";
	},30);
};


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