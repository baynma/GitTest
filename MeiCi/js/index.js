$(function(){
	bigScroll();//轮播图
	meiMen();//男士服饰
	
})
function bigScroll(){//轮播图
	var $scroll = $('.scroll');
	var $ul = $('.scrollpic');
	var timer;
	var num = 0;
	$ul.append($ul.html());
	//计时器
	$('.ball li').eq(0).css('background','red').siblings().css('background','#ffffff')
		timer = setInterval(left,4000);
		//left函数
		function left(){
			num ++;
			num %=$('.scrollpic li').length/2;
			$ul.animate({
				left:-num*960+'px'
			},200);
			$('.ball li').eq(num).css('background','red').siblings().css('background','#ffffff')
		}
		//暂停
		$('.leftbtn,.rightbtn').hover(function(){
			clearInterval(timer)
		},function(){
			timer = setInterval(left,4000);
		});
		// leftbtn&&&rightbtn
		$('.leftbtn').click(left);
		$('.rightbtn').click(function(){
			if(num==$('.scrollpic li').length/2){
				num=0;
			}
			$ul.animate({left:-num*960+'px'},200);
			$('.ball li').eq(num).css('background','red').siblings().css('background','#ffffff');
			num++;
		})
}//scroll  end
//meiMen   start
function meiMen(){
	// $.ajax({
	// 	url:"data/MeiCi.json",
	// 	type:"GET",
	// 	dataType:"json",
	// 	success:function(res,status,xhr){
	//          alert(res);
	//     }

	// })
	$.get("data/MeiCi.json",function(res,status,xhr){
		alert(0);
	});
	
}
