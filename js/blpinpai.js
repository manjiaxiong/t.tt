// logo部分
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
//热门商品部分
var oBtnLeft = document.getElementById('btnl');
var oBtnRight = document.getElementById('btnr');
var oBox = document.querySelector('.top .content .rmdiv .rmnr');
oBtnRight.onclick=function(){
	oBox.style.marginLeft='-1220px';
	this.style.color='#ccc';
	oBtnLeft.style.color='black';
	this.style.cursor='not-allowed';
	oBtnLeft.style.cursor='pointer';
}
oBtnLeft.onclick=function(){
	oBox.style.marginLeft='0px';
	oBtnRight.style.color='black';
	this.style.color='#ccc';
	this.style.cursor='not-allowed';
	oBtnRight.style.cursor='pointer';
}
//更换图片部分
var oH5 = document.querySelectorAll('.top .content .rmdiv .rmnr .jg .h5');
var oLi = document.querySelectorAll('.top .content .rmdiv .rmnr .jg');
var oLiImg = oH5[0].previousElementSibling;
var oLiImg1 = oH5[1].previousElementSibling;
var oLiImg2 = oH5[2].previousElementSibling;
var oLiImg3 = oH5[3].previousElementSibling;
var oH = document.querySelectorAll('.top .content .rmdiv .rmnr .jg .h');
var oL = document.querySelectorAll('.top .content .rmdiv .rmnr .jg .l');
// for(var i=0;i<oH.length;i++){
// 	oH[i].onmouseover=function(){
// 		for(var j=0;j<oLiImg.length;j++){
// 			oLiImg[j].src="../bl-images/pinpai/sj2.png";
// 		}
// 	}
// }
oH[0].onmouseover=function(){
	oLiImg1.src="../bl-images/pinpai/sj2.png";
}
oL[0].onmouseover=function(){
	oLiImg.src="../bl-images/pinpai/sj1.png";
}
oH[1].onmouseover=function(){
	oLiImg1.src="../bl-images/pinpai/sj2.png";
}
oL[1].onmouseover=function(){
	oLiImg1.src="../bl-images/pinpai/sj1.png";
}
oH[2].onmouseover=function(){
	oLiImg2.src="../bl-images/pinpai/sj2.png";
}
oL[2].onmouseover=function(){
	oLiImg2.src="../bl-images/pinpai/sj1.png";
}
oH[3].onmouseover=function(){
	oLiImg3.src="../bl-images/pinpai/sj2.png";
}
oL[3].onmouseover=function(){
	oLiImg3.src="../bl-images/pinpai/sj1.png";
}