showCart();
function showCart(){
	var oCartLogo = document.querySelector('.cart-box .cart-logo');
	var oCart = document.querySelector('.cart-box .cart');
	var timer = null;

	oCartLogo.onmouseover = function(){
		clearTimeout(timer);
		oCart.style.display = 'block';
	}
	oCartLogo.onmouseleave = function(){
		timer = setTimeout(function(){
			oCart.style.display = 'none';
		},1000)
	}
	oCart.onmouseover = function(){
		clearTimeout(timer);
		oCart.style.display = 'block';
	}
	oCart.onmouseleave = function(){
		timer = setTimeout(function(){
			oCart.style.display = 'none';
		},1000)
	}
}


showBtn();
function showBtn(){
	var oBtn = document.getElementById('btn');

	oBtn.onmouseenter = function(){
		oBtn.style.opacity = 1;
	}
	oBtn.onmouseleave = function(){
		oBtn.style.opacity = 0.62;
	}
	var timer = null;
	window.onscroll = function(){
		var t = document.documentElement.scrollTop;
		var tbtn = oBtn.style.bottom;
		var Speed = null;
		var time = null;
		if(t>=650){
			oBtn.style.display = 'block';
			// time = setInterval(function(){
			// 	Speed = 100;
			// 	tbtn = tbtn + Speed;
			// })
			// if(tbtn = 20){
			// 	clearInterval(time);
			// }
		}else{
			oBtn.style.display = 'none';
		}
	}
	oBtn.addEventListener('click',function(){
	    var backTopTimer = setInterval(function(){
	        topH = document.documentElement.scrollTop || document.body.scrollTop;
	        backTopSpeed = -40;
	        if(topH>0){
	            document.documentElement.scrollTop = document.body.scrollTop = topH+backTopSpeed;
	        }else{
	            clearInterval(backTopTimer);
	        }
	    },80);
	});
}