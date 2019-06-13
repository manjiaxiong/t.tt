//1.处理购物车
handleCart();
function handleCart(){
	//1.购物车
	var oIcon = document.querySelector('.top .icon #shop')
	// console.log(oIcon);
	var oShop = document.querySelector('.top .shop');
	// console.log(oShop);
	var timer =null;
	oIcon.onmouseenter=function(){
		animate(oShop,{height:330},false);
	}
	oIcon.onmouseleave=function(){
		// animate(oShop,{height:0},false);
		timer = setTimeout(function(){
			animate(oShop,{height:0},false);
		},300);
	}
	oShop.onmouseenter=function(){
		clearTimeout(timer);
	}
	oShop.onmouseleave=function(){
		animate(oShop,{height:0},false);
	}
}

//2.处理手机展示
handlePhone();
function handlePhone(){
	var oLi = document.querySelectorAll('.list .list-phone li');
	var oUl = document.querySelector('.list .list-phone ul');
	console.log(oUl);
	for(var i =0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onclick=function(){
			oUl.style.marginLeft=-400*this.index+0+'px';
		}

	}	
}