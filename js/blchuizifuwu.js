var oFix = document.querySelector('.logo .fix .fix-1');
var oFix1 = oFix.children;
var oFix2 = document.getElementById('fix');
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