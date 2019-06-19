function Current(options){
		//1.罗列属性
		this.box = document.getElementById(options.id);
		this.width = options.width;
		this.height = options.height;
		this.img = options.img;
		this.playtime = options.playtime;
		this.oUl = null;
		this.LeftBtn = null;
		this.RightBtn = null;
		this.bottomBtn = null;

		//默认显示第一张图片
		this.now = 0;

		//2.生成元素
		this.createEle();

		//3.添加事件
		this.addEvent();

		//4.是否执行轮播
		if(this.playtime){
			this.auto();
		}
	}

	//生成元素
	Current.prototype.createEle = function(){
		// console.log(this.box)
		//给父元素设置样式
		this.box.style.width = this.width + 'px';
		this.box.style.height = this.height + 'px';
		this.box.style.position = 'relative';
		this.box.style.left = '50%';
		this.box.style.marginLeft = -this.box.offsetWidth*0.5 + 'px';

		//生成Ul图片容器
		this.oUl = document.createElement('ul');
		//设置图片容器样式
		this.oUl.style.width = "100%";
		this.oUl.style.height = "100%";
		//生成Li
		for(var i = 0;i<this.img.length;i++){
			var aLi = document.createElement('li');
			//li设置样式
			aLi.style.width = "100%";
			aLi.style.height = "100%";
			aLi.style.listStyle = 'none';
			aLi.style.position = 'absolute';
			aLi.style.top = 0;
			aLi.style.left = 0;

			//默认显示第一张图片
			if(i == 0){
				aLi.style.zIndex = 99;
			}

			//生成图片
			var aImg = document.createElement('img');
			aImg.src = this.img[i];
			//设置图片样式
			aImg.style.width = "100%";
			aImg.style.height = "100%";

			//插入元素
			this.oUl.appendChild(aLi);
			aLi.appendChild(aImg);
		}

		//生成左右按钮
		this.LeftBtn = document.createElement('span');
		this.RightBtn = document.createElement('span');
		this.LeftBtn.className = 'leftbtn';
		this.RightBtn.className = 'rightbtn';
		// 改变显示层级
		this.LeftBtn.style.zIndex = 99;
		this.RightBtn.style.zIndex = 99;
		// 插入内容
		this.LeftBtn.innerHTML = "&lt;";
		this.RightBtn.innerHTML = "&gt;";

		//生成底部按钮
		this.bottomBtn = document.createElement('ul');
		this.bottomBtn.className = 'bottombtn';
		this.bottomBtn.style.zIndex = 99;
		//生成li
		for(var j = 0;j<this.img.length;j++){
			var oLi = document.createElement('li');
			oLi.style.listStyle = 'none';
			//默认第一个设置样式
			if(j == 0){
				oLi.className = 'active';
			}
			//插入元素
			this.bottomBtn.appendChild(oLi);
		}

		//插入元素
		this.box.appendChild(this.oUl);
		this.box.appendChild(this.LeftBtn);
		this.box.appendChild(this.RightBtn); 
		this.box.appendChild(this.bottomBtn);
		//js控制底部居中
		this.bottomBtn.style.marginLeft = -this.bottomBtn.offsetWidth*0.5 + 'px';
	}

	//添加事件
	Current.prototype.addEvent = function(){
		var _this = this;
		// 1.给右按钮添加
		this.RightBtn.onclick = function(){
			_this.now++;
			if(_this.now > _this.img.length - 1){
				_this.now = 0;
			}
			_this.tab();
		}
		// 2.给左按钮设置
		this.LeftBtn.onclick = function(){
			_this.now--;
			if(_this.now < 0){
				_this.now = _this.img.length - 1;
			}
			_this.tab();
		}
		//3.给底部按钮设置
		for(var l = 0;l<this.bottomBtn.children.length;l++){
			this.bottomBtn.children[l].index = l;
			this.bottomBtn.children[l].onclick = function(){
				_this.now = this.index;
				_this.tab();
			}
		}
	}

	Current.prototype.tab = function(){
		for(var k = 0;k<this.oUl.children.length;k++){
			this.oUl.children[k].style.zIndex = 0;
			this.oUl.children[k].style.opacity = 0.2;
			this.bottomBtn.children[k].className = '';
		}
		this.oUl.children[this.now].style.zIndex = 99;
		this.oUl.children[this.now].style.opacity = 1;
		//执行动画
		iChange(this.oUl.children[this.now],{opacity:100},false);
		this.bottomBtn.children[this.now].className = 'active';
	}

	//设置定时器
	Current.prototype.auto = function(){
		var time = null;
		var _this = this;
		//自动轮播
		time = setInterval(this.RightBtn.onclick,this.playtime);
		//鼠标移入停止
		this.box.onmouseover = function(){
			clearInterval(time);
		}
		//移出继续
		this.box.onmouseout = function(){
			time = setInterval(_this.RightBtn.onclick,_this.playtime);
		}
	}


new Current({
		id : "coursel",
		width : 1228,
		height : 501,
		img : ["../pic/l0.png","../pic/l1.png"],
		playtime : 1500
	})