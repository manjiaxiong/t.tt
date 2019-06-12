//论坛js部分

// handleForum();
// function handleForum(){
// 	//1.获取元素
// 	var oForum =document.getElementById('forum');
// 	// console.log(oForum);
// 	var listContent = document.querySelector('.top .list-content');
// 	// console.log(listContent);
// 	var timer =null;
// 	//2.绑定事件
// 	oForum.onmouseenter=function(){
// 		animate(listContent,{height:550},false);
		
// 	}
// 	oForum.onmouseleave=function(){
// 		timer=setTimeout(function(){
// 			animate(listContent,{height:0},false)
// 		},300);
// 	}
// 	//3.放到大盒子上不消失
// 	listContent.onmouseenter=function(){
// 		console.log(timer);
// 		clearTimeout(timer);
// 	}
// 	//4.放到大盒子上消失
// 	listContent.onmouseleave=function(){
// 		animate(listContent,{height:0},false);

// 	}
// }

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
