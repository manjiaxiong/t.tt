// 论坛js部分

handleForum();
function handleForum(){
	//1.获取元素
	var oForum =document.getElementById('forum');
	// console.log(oForum);
	var listContent = document.querySelector('.top .list-content');
	// console.log(listContent);
	var timer =null;
	//2.绑定事件
	oForum.onmouseenter=function(){
		animate(listContent,{height:550},false);
		
	}
	oForum.onmouseleave=function(){
		timer=setTimeout(function(){
			animate(listContent,{height:0},false)
		},300);
	}
	//3.放到大盒子上不消失
	listContent.onmouseenter=function(){
		console.log(timer);
		clearTimeout(timer);
	}
	//4.放到大盒子上消失
	listContent.onmouseleave=function(){
		animate(listContent,{height:0},false);

	}
}

//2.轮播图
handleCoursel();
function handleCoursel(){
	new Coursel({
		id:"coursel",
		width:1265,
		height:567,
		img:["images/T.png","images/phone.png"],
		playtime:1000,
	})
}
//处理手机下拉1
handlePhone();
function handlePhone(){
	var oLi =document.querySelectorAll('.content .container .container-right .container-right-rom .phone-style ul li');
	var oInput1 =document.querySelector('.content .container .container-right .container-right-rom .input1');
	var oPhoneStyle=document.querySelector('.content .container .container-right .container-right-rom .phone-style');
	oInput1.onclick=function(){
		oInput1.style.display="none";
		oPhoneStyle.style.display="block";
	}
	oLi[0].onclick=function(){
		oInput1.style.display="block";
		oPhoneStyle.style.display="none";
	}
	for(var i=0;i<oLi.length;i++){
		oLi[i].onmouseenter=function(){
			for(var j=0;j<oLi.length;j++){
				oLi[j].style.background="";
			}
			this.style.background="#ededed";
		}
	}
	oLi[1].onclick=function(){
		oInput1.style.display="block";
		oPhoneStyle.style.display="none";
		oInput1.innerHTML="手机品牌: 小米";
		oInput1.style.color="#ccc";
		oInput1.style.fontSize="14px";
	}
	oLi[2].onclick=function(){
		oInput1.style.display="block";
		oPhoneStyle.style.display="none";
		oInput1.innerHTML="手机品牌: 一加";
		oInput1.style.color="#ccc";
		oInput1.style.fontSize="14px";
	}
	oLi[3].onclick=function(){
		oInput1.style.display="block";
		oPhoneStyle.style.display="none";
		oInput1.innerHTML="手机品牌: Nexus";
		oInput1.style.color="#ccc";
		oInput1.style.fontSize="14px";
	}
	oLi[4].onclick=function(){
		oInput1.style.display="block";
		oPhoneStyle.style.display="none";
		oInput1.innerHTML="手机品牌: 三星";
		oInput1.style.color="#ccc";
		oInput1.style.fontSize="14px";
	}
}
//处理手机下拉2
handlePhone2();
function handlePhone2(){
	var oLi2=document.querySelectorAll('.content .container .container-right .container-right-rom .phone-style2 ul li');
	var Input2=document.querySelector('.content .container .container-right .container-right-rom .input2');
	var oPhoneStyle2=document.querySelector('.content .container .container-right .container-right-rom .phone-style2 ul');
	console.log(Input2);
	Input2.onclick=function(){
		Input2.style.display="none";
		oPhoneStyle2.style.display="block";
	}
	
	for(var i=0;i<oLi2.length;i++){
		oLi2[i].onmouseenter=function(){
			for(var j=0;j<oLi2.length;j++){
				oLi2[j].style.background="";
			}
			this.style.background="#ededed"
		}
		
	}
	oLi2[0].onclick=function(){
		Input2.style.display="block";
		oPhoneStyle2.style.display="none";
	}
	oLi2[1].onclick=function(){
		Input2.style.display="block";
		oPhoneStyle2.style.display="none";
		Input2.innerHTML="小米手机3";
		Input2.style.color="#ccc";
		Input2.style.fontSize="14px";
	}
	oLi2[2].onclick=function(){
		Input2.style.display="block";
		oPhoneStyle2.style.display="none";
		Input2.innerHTML="小米手机4";
		Input2.style.color="#ccc";
		Input2.style.fontSize="14px";
	}
}