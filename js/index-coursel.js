function Curosul(opstions){
		//1.罗列属性
		this.width=opstions.width;
		this.height=opstions.height;
		this.aimg=opstions.img;
		this.box  = document.getElementById(opstions.id);
		this.oUl=null;
		this.oRight=null;
		this.oLeft=null;
		this.oUlBto=null;
		this.now=0;
		this.time=null;
		console.log(this.aimg.length);
		//2.初始化页面
		this.bigBox();
		//3.点击事件
		this.bindEvent();
		//4.自动轮播
		this.aotoplay();
	}//初始化页面
	Curosul.prototype.bigBox=function(){
		//大盒子属性
		this.box.style.width=this.width+"px";
		this.box.style.height=this.height+"px";
		this.box.style.position="relative";
		//1.生成ul并设置属性
		this.oUl=document.createElement('ul');
		this.oUl.style.width="100%";
		this.oUl.style.height="100%";
		this.oUl.style.position="relative";
		this.box.appendChild(this.oUl);//插入ul
		//2.生成li并插入图片
		for(var i=0;i<this.aimg.length;i++){
			var oLi=document.createElement('li');
			oLi.style.position="absolute";
			oLi.style.height="100%";
			oLi.style.top=0;
			oLi.style.left=0;
			if(i==0){
				oLi.style.zIndex=99;//默认显示第一张
			}
			this.oUl.appendChild(oLi);
			var oimg=document.createElement('img');
			oimg.style.width="100%";
			oimg.style.height="100%";
			oimg.src=this.aimg[i];
			oLi.appendChild(oimg);
		}
		//3.生成左右按键并设置属性
		this.oRight=document.createElement("span");
		this.oLeft=document.createElement("span");
		this.oRight.className="span";
		this.oRight.style.left=0+"px";
		this.oRight.innerHTML="&lt;";
		this.box.appendChild(this.oRight);
		this.oLeft.className="span";
		this.oLeft.style.right=0;
		this.oLeft.innerHTML="&gt;"
		this.box.appendChild(this.oLeft);
		//4.生成下标
		this.oUlBto=document.createElement('ul');
		this.oUlBto.style.position="absolute";
		this.oUlBto.style.zIndex=100;
		this.oUlBto.style.bottom=10+"px";
		this.oUlBto.style.left="50%";
		// this.oUlBto.style.marginLeft=-this.oUlBto.offsetWidth*0.5+'px';
		this.box.appendChild(this.oUlBto);
		for(var i=0;i<2;i++){
			var oLi=document.createElement('li');
			oLi.style.float="left";
			oLi.style.width=10+"px";
			oLi.style.height=10+"px";
			oLi.style.marginRight=15+"px";
			oLi.style.background="rgba(0,0,0,0.2)";
			if(i==0){
					oLi.style.background="rgba(255,0,0,0.7)";//默认第一个原点的属性
			}
			oLi.style.borderRadius="50%";
			this.oUlBto.appendChild(oLi);
		}
		 this.oUlBto.style.marginLeft=-this.oUlBto.offsetWidth*0.5+'px';
	}
	Curosul.prototype.bindEvent=function(){
		var _this=this;
		//1.左键点击事件
		this.oLeft.onclick=function(){
			_this.now++;//每点击一次now+1
			if(_this.now>_this.aimg.length-1){
				_this.now=0;
			}
			_this.tab();
			// for(var i=0;i<_this.aimg.length;i++){
			// 	_this.oUl.children[i].style.zIndex=0;
			// }
			// _this.oUl.children[_this.now].style.zIndex=99;
		}
		//2.右键点击事件
		this.oRight.onclick=function(){
			_this.now--;
			if(_this.now<0){
				_this.now=_this.aimg.length-1;
			}
			_this.tab();
		}
		//3.下标点击事件
		for(var i=0;i<this.aimg.length;i++){
			this.oUlBto.children[i].index=i;
			this.oUlBto.children[i].onclick=function(){
				_this.now = this.index;
				_this.tab();
			}
		}
	}//抽提的点击函数
	Curosul.prototype.tab=function(){
			for(var i=0;i<this.aimg.length;i++){
				this.oUl.children[i].style.zIndex=0;
				this.oUlBto.children[i].style.background="rgba(0,0,0,0.2)";
			}
			this.oUl.children[this.now].style.zIndex=99;
			this.oUlBto.children[this.now].style.background="rgba(255,0,0,0.7)";
	}//自动播放
	Curosul.prototype.aotoplay=function(){
		var _this=this;//保存this
		this.timer=setInterval(_this.oLeft.onclick,2000);
		this.box.onmouseover=function(){
			clearInterval(_this.timer);
		}
		this.box.onmouseout=function(){
			_this.timer=setInterval(_this.oLeft.onclick,2000);
		}
	}