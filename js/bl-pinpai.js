// logo固定部分
var oFix = document.querySelector('.logo .fix .fix-1');
var oFix1 = oFix.children;
var oFix2 = document.getElementById('fix');
var oFix3 = document.querySelector('.logo .qp');
var oFix4 = document.querySelector('.logo .qp .fix-1');
var oFix5 = oFix4.children;
for(var i=0;i<oFix1.length;i++){
	oFix1[i].onmouseover=function(){
		oFix2.style.height='300px';
		oFix2.style.opacity=1;
	}
	oFix2.onmouseout=function(){
			oFix2.style.height='0px';
			oFix2.style.opacity=0;
	}
}
window.onscroll=function(){
	var iTop = getScrollTop();
	if(iTop>=87){
		oFix3.style.height='60px';
		oFix3.style.opacity=1;
	}else{
		oFix3.style.height='0px';
		oFix3.style.opacity=0;
	}
}
//top部分
var oLogo = document.getElementById('log');
var oBtn = document.getElementById('btn');
var oLogoLi = oLogo.children;
var oBtns = oBtn.children;
var nowIndex = 0;
var timer = null;
timer=setInterval(function(){
	nowIndex++;
	if(nowIndex>=oLogoLi.length){
		nowIndex=0
	}
	for(var i=0;i<oLogoLi.length;i++){
		oLogoLi[i].style.zIndex=0;
		oBtns[i].style.background='#fff';
	}
	oLogoLi[nowIndex].style.zIndex=5;
	oBtns[nowIndex].style.background='gray';
},2000)
oBtns[0].onclick=function(){
	clearInterval(timer);
	oLogoLi[0].style.zIndex=5;
	oLogoLi[1].style.zIndex=0;
	this.style.background='gray';
	oBtns[1].style.background='#fff';
}
oBtns[1].onclick=function(){
	clearInterval(timer);
	oLogoLi[1].style.zIndex=5;
	oLogoLi[0].style.zIndex=0;
	oBtns[0].style.background='#fff';
	this.style.background='gray';
}