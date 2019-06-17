// logo部分
var oFix = document.querySelector('.logo .fix .fix-1');
var oBtnn = oFix.children;
var oFix2 = document.getElementById('fixx');
for(var i=0;i<oBtnn.length;i++){
	oBtnn[i].onmouseover=function(){
		oFix2.style.opacity=1;
		oFix2.style.height='300px';
	}
}
oFix2.onmouseover=function(){
		oFix2.style.opacity=1;
		oFix2.style.height='300px';
	}
oFix2.onmouseout=function(){
		oFix2.style.opacity=0;
		oFix2.style.height='0px';
}
//顶部固定
var oFix3 = document.querySelector('.logo .qp');
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
//自适应

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
var oH5 = document.querySelectorAll('.top .content .rmdiv .rmnr .jg .h1');
var oLi = document.querySelectorAll('.top .content .rmdiv .rmnr .jg');
var oLiImg = oH5[0].previousElementSibling;
var oLiImg1 = oH5[1].previousElementSibling;
var oLiImg2 = oH5[2].previousElementSibling;
var oLiImg3 = oH5[3].previousElementSibling;
var oA = document.querySelectorAll('.top .content .rmdiv .rmnr .jg .h');
var oB = document.querySelectorAll('.top .content .rmdiv .rmnr .jg .l');

oA[0].onmouseover=function(){
	this.className="h div";
	oB[0].className="l";
	oLiImg.src="../bl-images/pinpai/sj2.png";
}
oB[0].onmouseover=function(){
	this.className="l div";
	oA[0].className="h";
	oLiImg.src="../bl-images/pinpai/sj1.png";
}
oA[1].onmouseover=function(){
	this.className="h div";
	oB[1].className="l";
	oLiImg1.src="../bl-images/pinpai/sj1.png";
}
oB[1].onmouseover=function(){
	this.className="l div";
	oA[1].className="h";
	oLiImg1.src="../bl-images/pinpai/sj2.png";
}
oA[2].onmouseover=function(){
	this.className="h div";
	oB[2].className="l";
	oLiImg2.src="../bl-images/pinpai/sj2.png";
}
oB[2].onmouseover=function(){
	this.className="l div";
	oA[2].className="h";
	oLiImg2.src="../bl-images/pinpai/sj1.png";
}
oA[3].onmouseover=function(){
	this.className="h div";
	oB[3].className="l";
	oLiImg3.src="../bl-images/pinpai/sj1.png";
}
oB[3].onmouseover=function(){
	this.className="l div";
	oA[3].className="h";
	oLiImg3.src="../bl-images/pinpai/sj2.png";
}

//内容图片更换
var oH5 = document.querySelectorAll('.head .content .sjpj .pj .pj-nr .h5');
var oUl = document.querySelectorAll('.head .content .sjpj');
var oLiImgq = oH5[0].previousElementSibling;
var oLiImgw = oH5[1].previousElementSibling;
var oLiImge = oH5[2].previousElementSibling;
var oLiImgr = oH5[3].previousElementSibling;
var oLiImg4 = oH5[4].previousElementSibling;
var oLiImg5 = oH5[5].previousElementSibling;
var oLiImg6 = oH5[6].previousElementSibling;
var oLiImg7 = oH5[7].previousElementSibling;
var oLiImg8 = oH5[8].previousElementSibling;
var oLiImg9 = oH5[9].previousElementSibling;
var oH = document.querySelectorAll('.head .content  .sjpj .pj .pj-nr .h');
var oL = document.querySelectorAll('.head .content  .sjpj .pj .pj-nr .l');

oH[0].onmouseover=function(){
	this.className="h div";
	oL[0].className="l";
	oLiImgq.src="../bl-images/pinpai/sj2.png";
}
oL[0].onmouseover=function(){
	this.className="l div";
	oH[0].className="h";
	oLiImgq.src="../bl-images/pinpai/sj1.png";
}
oH[1].onmouseover=function(){
	this.className="h div";
	oL[1].className="l";
	oLiImgw.src="../bl-images/pinpai/sj2.png";
}
oL[1].onmouseover=function(){
	this.className="l div";
	oH[1].className="h";
	oLiImgw.src="../bl-images/pinpai/sj1.png";
}
oH[2].onmouseover=function(){
	this.className="h div";
	oL[2].className="l";
	oLiImge.src="../bl-images/pinpai/syj.png";
}
oL[2].onmouseover=function(){
	this.className="l div";
	oH[2].className="h";
	oLiImge.src="../bl-images/pinpai/sj1.png";
}
oH[4].onmouseover=function(){
	this.className="h div";
	oL[5].className="l";
	oLiImgr.src="../bl-images/pinpai/y2.png";
}
oL[5].onmouseover=function(){
	this.className="l div";
	oH[4].className="h";
	oLiImgr.src="../bl-images/pinpai/y3.png";
}
oH[5].onmouseover=function(){
	this.className="h div";
	oL[6].className="l";
	oLiImg4.src="../bl-images/pinpai/y3.png";
}
oL[6].onmouseover=function(){
	this.className="l div";
	oH[5].className="h";
	oLiImg4.src="../bl-images/pinpai/y4.png";
}
oH[6].onmouseover=function(){
	this.className="h div";
	oL[7].className="l";
	oLiImg5.src="../bl-images/pinpai/y1.png";
}
oL[7].onmouseover=function(){
	this.className="l div";
	oH[6].className="h";
	oLiImg5.src="../bl-images/pinpai/y4.png";
}
oH[7].onmouseover=function(){
	this.className="h div";
	oL[8].className="l";
	oLiImg6.src="../bl-images/pinpai/y6.png";
}
oL[8].onmouseover=function(){
	this.className="l div";
	oH[7].className="h";
	oLiImg6.src="../bl-images/pinpai/y1.png";
}
oH[8].onmouseover=function(){
	this.className="h div";
	oL[9].className="l";
	oLiImg7.src="../bl-images/pinpai/y4.png";
}
oL[9].onmouseover=function(){
	this.className="l div";
	oH[8].className="h";
	oLiImg7.src="../bl-images/pinpai/y5.png";
}
oH[9].onmouseover=function(){
	this.className="h div";
	oL[10].className="l";
	oLiImg7.src="../bl-images/pinpai/y5.png";
}
oL[10].onmouseover=function(){
	this.className="l div";
	oH[9].className="h";
	oLiImg7.src="../bl-images/pinpai/y2.png";
}
oH[9].onmouseover=function(){
	this.className="h div";
	oL[10].className="l";
	oLiImg8.src="../bl-images/pinpai/y5.png";
}
oL[10].onmouseover=function(){
	this.className="l div";
	oH[9].className="h";
	oLiImg8.src="../bl-images/pinpai/y1.png";
}
oH[12].onmouseover=function(){
	this.className="h div";
	oL[11].className="l";
	oLiImg9.src="../bl-images/pinpai/jsb.png";
}
oL[11].onmouseover=function(){
	this.className="l div";
	oH[12].className="h";
	oLiImg9.src="../bl-images/pinpai/rb.png";
}