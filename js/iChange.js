// var iSpeed;
function iChange(obj,options,isLinear,fnEnd){
		//设置不传参时默认匀速动画
		if(isLinear == undefined){
			isLinear = true;
		}
		//防止用户多次点击
		clearInterval(obj.time);
		obj.time = setInterval(function(){
			//判断属性是否都执行完毕
			var currentAll = true;
			for(attr in options){
				//是否终止当前动画
				var isClearCurrent = false;
				var iVal = parseFloat(getComputedStyle(obj,false)[attr]);
				// console.log(iVal)
				if(attr == 'opacity'){
					iVal = Math.round(iVal * 100);
				}
				if(isLinear){ //匀速动画
					if(iVal < options[attr]){
						iSpeed = 7;
					}else{
						iSpeed = -7;
					}
					if(Math.abs(options[attr] - iVal) < Math.abs(iSpeed)){
						if(attr == 'opacity'){
							obj.style[attr] = options[attr] / 100;
						}else{
							obj.style[attr] = options[attr] + 'px';
						}
						//终止当前动画
						isClearCurrent = true;
					}else{
						//判断动画是否执行完毕
						currentAll = false;
					}
				}else{ //减速动画
					iSpeed = (options[attr] - iVal)/10;
					iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
					if(!iSpeed){
						isClearCurrent = true;
					}else{
						currentAll = false;
					}
				}
				//当前动画终止条件
				if(!isClearCurrent){
					if(attr == 'opacity'){
							obj.style[attr] = (iVal + iSpeed)/100;
						}else{
							obj.style[attr] = iVal + iSpeed + 'px';
						}
				}
				//真值，动画执行完毕，清除定时器
				if(currentAll){
					clearInterval(obj.time);
					typeof fnEnd == 'function'  && fnEnd();
				}
			}
		},30)
	}