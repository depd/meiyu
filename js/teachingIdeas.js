var oImg = document.getElementById('img');
var text2 = document.getElementById('text2');
var oImg4 = document.getElementById('img4')
var text4 = document.getElementById('text4');
window.addEventListener('scroll',function(){
	var oTop = document.documentElement.scrollTop||document.body.scrollTop;
	var oClient = document.documentElement.clientHeight||document.body.clientHeight;
	if((oTop+oClient)>(oImg.offsetTop)){
		oImg.style.transform = "translateX(0)";
		oImg.style.opacity = "1";
	}
},false)
window.addEventListener('scroll',function(){
	var oTop = document.documentElement.scrollTop||document.body.scrollTop;
	var oClient = document.documentElement.clientHeight||document.body.clientHeight;
	if((oTop+oClient)>(text2.offsetTop)){
		text2.style.transform = "translateX(0)";
		text2.style.opacity = "1";
	}
},false)
window.addEventListener('scroll',function(){
	var oTop = document.documentElement.scrollTop||document.body.scrollTop;
	var oClient = document.documentElement.clientHeight||document.body.clientHeight;
	if((oTop+oClient)>(text4.offsetTop)){
		text4.style.transform = "translateX(0)";
		text4.style.opacity = "1";
	}
},false)
window.addEventListener('scroll',function(){
	var oTop = document.documentElement.scrollTop||document.body.scrollTop;
	var oClient = document.documentElement.clientHeight||document.body.clientHeight;
	if((oTop+oClient)>(oImg4.offsetTop)){
		oImg4.style.transform = "translateX(0)";
		oImg4.style.opacity = "1";
	}
},false)