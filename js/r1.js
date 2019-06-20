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


var oMsg = document.querySelector('.header .bottom-msg');
var oMsgBox = document.getElementById('message');

function showMsg(){
	var t = document.documentElement.scrollTop;
	if(t>=200){
		oMsg.style.display = 'block';
	}else{
		oMsg.style.display = 'none';
	}
}

function changeMsg(){
	var t = document.documentElement.scrollTop;
	if(t>=9700){
		oMsgBox.className = 'message messages';
	}else{
		oMsgBox.className = 'message';
	}
}

window.addEventListener('scroll',function(){
		showMsg();
		changeMsg();
	})