function Coursel(options){
	this.box=document.getElementById(options.id);
	this.width =options.width;
	this.height =options.height;
	this.img =options.img;
	this.oUlImg=null;
	this.leftbtn=null;
	this.rightbtn=null;
	this.bottombtn=null;
	//	默认显示第一张图片
	this.now=0;
	//设置轮播图时间
	this.playtime =options.playtime;

	//初始化页面
	this.init();
	this.bindEvent();
	// 4是否轮播
	if(this.playtime){
		this.auto();
	}
}
Coursel.prototype.init=function(){
	//给外层父容器添加样式
	this.box.style.position="relative"
	this.box.style.width=this.width +"px";
	this.box.style.height=this.height+"px";
	//生成图片父容器
	this.oUlImg = document.createElement('ul');
	//限制图片父容器宽高
	this.oUlImg.style.width="100%";
	this.oUlImg.style.height="100%";
	//生成li
	for(var i =0;i<this.img.length;i++){
		//生成li
		var oLi =document.createElement('li');
		oLi.style.width="100%";
		oLi.style.height="100%";
		oLi.style.position="absolute"
		oLi.style.left=0;
		oLi.style.top=0;
		//插入图片父容器
		this.oUlImg.appendChild(oLi);
		//生成图片
		var oImg =document.createElement('img')
		oImg.src=this.img[i];
		//将图片插入到li
		oLi.appendChild(oImg);
		//默认显示第一张图片
		if(i ==0){
			oLi.style.zIndex=99;
		}
	}
	//2生成左右按钮
	this.leftbtn = document.createElement('span')
	this.rightbtn = document.createElement('span')
	//给按钮添加样式
	this.leftbtn.className="leftbtn";
	this.rightbtn.className="rightbtn";
	this.leftbtn.style.zIndex="999";
	this.rightbtn.style.zIndex="999";
	//给按钮添加内容
	// this.leftbtn.innerHTML ="&lt";
	// this.rightbtn.innerHTML="&gt";

	//3生成底部按钮
	this.bottombtn =document.createElement('ul');
	for(j =0; j<this.img.length;j++){
		var oLi =document.createElement('li');
		this.bottombtn.appendChild(oLi);
		//给底部按钮添加样式
		this.bottombtn.className="bottom-btn"
		//默认第一个被选中
		if(j==0){
			oLi.className="active";
		}
	}
	
	//图片父容器插入到外层容器里面
	this.box.appendChild(this.oUlImg);
	//将按钮插入到外层父容器里
	this.box.appendChild(this.leftbtn);
	this.box.appendChild(this.rightbtn);
	//将底部按钮插入到外层父容器里
	this.box.appendChild(this.bottombtn);
	//通过js得到底部按钮的位置
	this.bottombtn.style.marginLeft=-this.bottombtn.offsetWidth*0.5 +"px";
}
Coursel.prototype.bindEvent=function(){
	//给右箭头绑定事件
	var _this =this;
	this.rightbtn.onclick=function(){
		_this.now++;
		if(_this.now>_this.img.length-1){
			_this.now=0;
		}
		_this.tab();
	}
	//2给左箭头绑定事件
	this.leftbtn.onclick = function(){
		_this.now--;
		if(_this.now < 0){
			_this.now = _this.img.length - 1;
		}
		_this.tab();
	}
	//3给底部按钮绑定事件
	for(var j=0;j<this.bottombtn.children.length;j++){
		this.bottombtn.children[j].index =j;
		this.bottombtn.children[j].onclick=function(){
			_this.now=this.index;
			_this.tab();
		}
	}

}
Coursel.prototype.tab = function(){
	for(var i =0;i<this.oUlImg.children.length;i++){
		this.oUlImg.children[i].style.zIndex=0;
		this.oUlImg.children[i].style.opacity=0.2;
		this.bottombtn.children[i].className="";
	}
	this.oUlImg.children[this.now].style.zIndex="99";
	// this.oUlImg.children[i].style.opacity=1;
	//执行动画
	animate(this.oUlImg.children[this.now],{opacity:100})
	this.bottombtn.children[this.now].className="active";
}
Coursel.prototype.auto =function(){
	var _this = this;
	console.log(1)
	//设置定时器
	var timer =0;
	//自动轮播
	timer = setInterval(this.rightbtn.onclick,this.playtime);
	//当鼠标移入是停止
	this.box.onmouseover = function(){
		clearInterval(timer);
	}
	//鼠标移除重新开始动画
	this.box.onmouseout = function(){
		timer = setInterval(_this.rightbtn.onclick,_this.playtime);
	}
}
