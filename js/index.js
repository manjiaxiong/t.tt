//1购物车部分
CartEvent();
function CartEvent(){
	var CartBtn=document.querySelector('.top-cart');
	var CartCont=document.querySelector('.cart');
	var CartBox=document.querySelector('.cart-box');
	var hide=null;
	clearTimeout(hide); 
	CartBtn.onmouseenter=function(){
		// CartCont.style.display='block';
		clearTimeout(hide);
		CartCont.style.zIndex=1;
		CartCont.innerHTML='<div class="loading"></div>'
		animation(CartCont,{height:358,opacity:100},true,function(){
			CartCont.style.border='1px solid #ccc';
			CartCont.innerHTML='<img src="../images/cart.png" alt=""><p>购物车为空</p> <p>您还没有选购任何商品，现在前往商城选购吧！</p>'
		});
	}
	CartCont.onmouseleave=function(){
		// CartCont.style.display='none';
		hide=setTimeout(function(){
			animation(CartCont,{height:0,opacity:0},true,function(){
				CartCont.style.border='none';
				CartCont.style.zIndex=0;
		})},600)
		
	}
} 		
//2蒙版效果
oMaskEvent();
function oMaskEvent(){
	var oRed=document.createElement('img');
	var oMask=document.createElement('div');
	window.onload=function(){	
		oRed.src="../images/红包.png";
		oRed.style.position='absolute';
		oRed.style.bottom='200px';
		oRed.style.right='800px';
		oMask.style.position='fixed';
		oMask.style.top='0px';
		oMask.style.left='0px';
		oMask.style.right='0px';
		oMask.style.bottom='0px';
		oMask.style.backgroundColor='rgba(0,0,0,0.2)'
		document.body.appendChild(oRed);
		document.body.appendChild(oMask);
	}
	oRed.onclick=function(ev){
		var oEvent= ev||event;
		oEvent.stopPropagation();
	}
	document.onclick=function(){
		oMask.style.display='none';
		oRed.style.position='fixed';
		oRed.style.bottom='0px';
		oRed.style.right='0px';
		oRed.style.width='100px'
	}
}
//3header的数据加载
HeaderCont();
function HeaderCont(){
	var aHeaderLi=document.querySelectorAll('.header-list li');
	var oHeaderContUl=document.querySelectorAll('.header-Cont ul');
	var oHeaderCont=document.querySelector('.header-Cont ');
	console.log(oHeaderContUl.length);
	var hideCon=null;
	console.log(aHeaderLi);
	clearTimeout(hideCon);
	for(var i=0;i<aHeaderLi.length;i++){
		aHeaderLi[i].index=i;
		aHeaderLi[i].onmouseenter=function(){
			clearTimeout(hideCon);
			for(var j=0;j<aHeaderLi.length;j++){
				oHeaderContUl[j].style.display='none';
			}
			oHeaderContUl[this.index].style.display='block';
			animation(oHeaderCont,{height:278},true);
		}
	}
	oHeaderCont.onmouseleave=function(){
		hideCon=setTimeout(function(){animation(oHeaderCont,{height:0},true)},500) ;
	}
}
