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
	oFixbox.style.opacity=1;
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
//底部固定
var oFixBottom = document.getElementById('fixbottom');
window.onscroll=function(){
	
}
window.onscroll=function(){
	var iTop = getScrollTop();
	if(iTop>=120){
		oFixBottom.style.opacity=1;
	}else{
		oFixBottom.style.opacity=0;
	}
}