var oList=document.querySelectorAll("#list li a");
	var oRder=document.querySelectorAll("#order li");
	for(var i=0;i<oList.length;i++){
		oList[i].index=i;
		oList[i].onmouseover=function(){
			for(var j=0;j<oRder.length;j++){
				oRder[j].style.display='none';
			}
			oRder[this.index].style.display='block';
		}
		oRder[i].onmouseout=function(){
			this.style.display="none";
		}
	}
	var img1=document.getElementById('img1');
	var img2=document.getElementById('img2');
	var skip1=document.getElementById('skip1');
	var skip2=document.getElementById('skip2');
	skip1.onclick=function(){
		img1.style.display="block";
		img2.style.display="none";
	}
	skip2.onclick=function(){
		img2.style.display="block";
		img1.style.display="none";
	}