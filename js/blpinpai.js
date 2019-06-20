// logo部分
var oFix = document.querySelector('.logo .fix .fix-1');
var oBtnn = oFix.children;
var oFixbox = document.getElementById('fixbox');
var oFixHome = document.getElementById('fixx');
var oFixPhone = document.getElementById('fixsj');
var oFixGf = document.getElementById('fixgf');
var oFixFs = document.getElementById('fixfs');
var oFixFw = document.getElementById('fixfw');
oBtnn[0].onmouseover=function(){
	oFixFw.style.display='none';
	oFixGf.style.display='none';
	oFixFs.style.display='none';
	oFixPhone.style.display='none';
	oFixbox.style.height='300px';
	oFixHome.style.display='block';
}
oBtnn[1].onmouseover=function(){
	oFixGf.style.display='none';
	oFixFw.style.display='none';
	oFixFs.style.display='none';
	oFixHome.style.display='none';
	oFixbox.style.height='300px';
	oFixPhone.style.display='block';
}
oBtnn[2].onmouseover=function(){
	oFixHome.style.display='none';
	oFixFw.style.display='none';
	oFixFs.style.display='none';
	oFixbox.style.height='300px';
	oFixPhone.style.display='none';
	oFixGf.style.display='block';
}
oBtnn[3].onmouseover=function(){
	oFixHome.style.display='none';
	oFixFw.style.display='none';
	oFixbox.style.height='300px';
	oFixPhone.style.display='none';
	oFixGf.style.display='none';
	oFixFs.style.display='block';
}
oBtnn[4].onmouseover=function(){
	oFixHome.style.display='none';
	oFixbox.style.height='300px';
	oFixPhone.style.display='none';
	oFixGf.style.display='none';
	oFixFs.style.display='none';
	oFixFw.style.display='block';
}
oFixbox.onmouseover=function(){
	oFixbox.style.height='300px';
}
//监听每个页面
oFixHome.onmouseover=function(){
	oFixHome.style.display='block';
}
oFixPhone.onmouseover=function(){
	oFixPhone.style.display='block';
}
oFixGf.onmouseover=function(){
	oFixGf.style.display='block';
}
oFixFs.onmouseover=function(){
	oFixFs.style.display='block';
}
oFixFw.onmouseover=function(){
	oFixFw.style.display='block';
}
//移除消失
oFixbox.onmouseout=function(){
	oFixbox.style.height='0px';
	oFixPhone.style.display='none';
	oFixHome.style.display='none';
	oFixGf.style.display='none';
	oFixFs.style.display='none';
	oFixFw.style.display='none';
}
// logo部分
var oFixQp = document.querySelector('.logo .qp .fix-1');
var oBtna = oFixQp.children;
var oFixBox = document.getElementById('fixbox1');
var oFixHome1 = document.getElementById('fixx1');
var oFixPhone1 = document.getElementById('fixsj1');
var oFixGf1 = document.getElementById('fixgf1');
var oFixFs1 = document.getElementById('fixfs1');
var oFixFw1 = document.getElementById('fixfw1');
oBtna[0].onmouseover=function(){
	oFixFw1.style.display='none';
	oFixGf1.style.display='none';
	oFixFs1.style.display='none';
	oFixPhone1.style.display='none';
	oFixBox.style.height='300px';
	oFixBox.style.display='block';
	oFixHome1.style.display='block';
}
oBtna[1].onmouseover=function(){
	oFixGf1.style.display='none';
	oFixFw1.style.display='none';
	oFixFs1.style.display='none';
	oFixHome1.style.display='none';
	oFixBox.style.height='300px';
	oFixPhone1.style.display='block';
	oFixBox.style.display='block';
}
oBtna[2].onmouseover=function(){
	oFixHome1.style.display='none';
	oFixFw1.style.display='none';
	oFixFs1.style.display='none';
	oFixBox.style.height='300px';
	oFixPhone1.style.display='none';
	oFixGf1.style.display='block';
	oFixBox.style.display='block';
}
oBtna[3].onmouseover=function(){
	oFixHome1.style.display='none';
	oFixFw1.style.display='none';
	oFixBox.style.height='300px';
	oFixPhone1.style.display='none';
	oFixGf1.style.display='none';
	oFixFs1.style.display='block';
	oFixBox.style.display='block';
}
oBtna[4].onmouseover=function(){
	oFixHome1.style.display='none';
	oFixBox.style.height='300px';
	oFixPhone1.style.display='none';
	oFixGf1.style.display='none';
	oFixFs1.style.display='none';
	oFixFw1.style.display='block';
	oFixBox.style.display='block';
}
oFixBox.onmouseover=function(){
	oFixBox.style.height='300px';
}
//监听每个页面
oFixHome1.onmouseover=function(){
	oFixHome1.style.display='block';
}
oFixPhone1.onmouseover=function(){
	oFixPhone1.style.display='block';
}
oFixGf1.onmouseover=function(){
	oFixGf1.style.display='block';
}
oFixFs1.onmouseover=function(){
	oFixFs1.style.display='block';
}
oFixFw1.onmouseover=function(){
	oFixFw1.style.display='block';
}
//移除消失
oFixBox.onmouseout=function(){
	oFixBox.style.height='0px';
	oFixBox.style.display='none';
	oFixPhone1.style.display='none';
	oFixHome1.style.display='none';
	oFixGf1.style.display='none';
	oFixFs1.style.display='none';
	oFixFw1.style.display='none';
}
//顶部固定
var oFix3 = document.querySelector('.logo .qp');
window.onscroll=function(){
	var iTop = getScrollTop();
	if(iTop>=87){
		oFix3.style.height='60px';
		oFix3.style.opacity=1;
		oFix3.style.display='block';
	}else{
		oFix3.style.height='0px';
		oFix3.style.opacity=0;
		oFix3.style.display='none';
	}
}

//top轮播图部分
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
//购物车部分
var oCart = document.getElementById('cart');
var oCartt = document.getElementById('cartt');
var timer = '';
oCart.onmouseover=function(){
	timer = setTimeout(function(){
		oCartt.style.display='block';
		oCartt.style.opacity=1;
	},150)
}
oCart.onmouseout=function(){
	timer = setTimeout(function(){
		oCartt.style.display='none';
		oCartt.style.opacity=0;
	},150)
}
var oShop = document.getElementById('shop');
var oShopping = document.getElementById('shopping');
var timer = '';
oShop.onmouseover=function(){
	timer = setTimeout(function(){
		oShopping.style.display='block';
		oShopping.style.opacity=1;
	},150)
}
oShop.onmouseout=function(){
	timer = setTimeout(function(){
		oShopping.style.display='none';
		oShopping.style.opacity=0;
	},150)
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
	oLiImgw.src="../bl-images/pinpai/sj1.png";
}
oL[1].onmouseover=function(){
	this.className="l div";
	oH[1].className="h";
	oLiImgw.src="../bl-images/pinpai/sj2.png";
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
//照片阴影
var oLi = document.querySelectorAll('.top .content .rmdiv .rmnr .jg');
for(var i=0;i<oLi.length;i++){
	oLi[i].onmouseover=function(){
		this.style.boxShadow='';
		this.style.boxShadow='0px 0px 15px rgba(0,0,0,0.3) inset';
	}
	oLi[i].onmouseout=function(){
		this.style.boxShadow='';
	}
}
var oLii = document.querySelectorAll('.head .content .sjpj .pj .pj-nr');
for(var i=0;i<oLii.length;i++){
	oLii[i].onmouseover=function(){
		this.style.boxShadow='';
		this.style.boxShadow='0px 0px 15px rgba(0,0,0,0.3) inset';
	}
	oLii[i].onmouseout=function(){
		this.style.boxShadow='';
	}
}