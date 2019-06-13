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
		oRed.style.zIndex=3333;
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
//4轮播图
CourselEvent();
function CourselEvent(){
	new Curosul({
		id:"coursel",
		width:1222,
		height:497,
		img:["../images/coursel1.jpg","../images/coursel2.jpg"]
	})
}
//5热门商品查看更多
MoreCommdite();
function MoreCommdite(){
	var oLeft=document.querySelector('.icon-zuo');
	var oRight=document.querySelector('.fa-chevron-right');
	var oCommdite=document.querySelector('#hot ul');
	oLeft.onclick=function(){
		animation(oCommdite,{marginLeft:0})
		console.log(1);
	}
	oRight.onclick=function(){
		animation(oCommdite,{marginLeft:-1220})
	}
}
//6加载数据
PartLoading();
function PartLoading(){
	var oPartCont=document.querySelector('#part');
	loaDing();
	function loaDing(){
		var html="";
		html+='<ul class="clearfix">';
			html+=" <li class='big'>";
	        html+="                    <a href="+'javascript:'+">";
	        html+='                         <img src='+PartCont[0].src+' alt="">';
	        html+="                     </a>";
	        html+="                 </li>";
	        for(var i=1;i<PartCont.length;i++){
		        html+='	<li class="hover show">'
	            html+='        <a href="#">'
	            html+='            <img src="'+PartCont[i].src1+'" alt="">'
	            html+='            <p class="name">'+PartCont[i].name+'</p>'
	            html+='            <p class="introduce">'+PartCont[i].introduce+'</p>'
	            html+='            <img src="'+PartCont[i].src2+'" alt="">'
	            html+='            <div class="situation">'
	            html+='                <span class="xiangqing">'+PartCont[i].xiangqing+'</span>'
	            html+='                 <span class="shouqing">'+PartCont[i].shouqing+'</span>'
	            html+='            </div>'
	            html+='            <p class="price clearfix">'+PartCont[i].price+'</p>'
	            html+='        </a>'
	            html+='    </li>'
	        }
		html+='</ul>';
		oPartCont.innerHTML=html; 
	}
}

