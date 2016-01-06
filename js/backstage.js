var result;  // 获得从后台返回的数据

$(function(){  //获得json数据并赋值给全局变量
	$.ajax({
		type:'GET',
		url:'test.json',
		dataType:'json',
		success:function(data){
			result = data;
		},
		error:function(){
			console.log('error');
		}
	});
});

function Stage(){  //入口函数
	this.myClick();
	this.operation();
	this.lock = false;
};
Stage.prototype.operation = function(){  //增删改查操作
	$('#delete').click(function(){ // 删除操作
		var tt = $("input[type='radio']:checked").parents('tr').remove();
		console.log(tt);
	});
	$('#increase').click(function(){
		$('.op-container').show();
	});
	$('.data-push').click(function(){
		$(this).parents('.op-container').hide();
	});
	$('th.f1 input').click(function(){  //反选
		var arr = $("input[name='checkbox']");
		for(var i=0;i<arr.length;i++){ 
			arr[i].checked = ! arr[i].checked; 
		} 
	});
};

Stage.prototype.myAjax=function(tar){  //后台获得的数据动态添加到页面
	$(".tbody table").html('');
	$.each(result,function(i,n){
		console.log(i);
		console.log(n);
		console.log(n[tar]);
		var item = n[tar];  //更改json数据的项
		for(var j = 0; j < item.length; j++){
			var nl = '<tr>';  //一条数据
				nl += '<td class="radio">';
				nl += '<input name="back" type="radio">';
				nl += '</td>';
				nl += '<td class="tablenomal">'+item[j].first+'</td>';
				nl += '<td class="tablenomal">'+item[j].seccond+'</td>';
				nl += '</tr>';
			
			$('.tbody table').append(nl);
		}

	});
}



Stage.prototype.myClick=function(){
	$('.header .photo').click(function(){ /*侧滑栏*/
		$('.container').toggleClass('addAni');
		$('.sideNav').toggleClass('reduAni');
	});
	var that = this;
	setInterval(function(){  //设置锁  
		that.lock = false;
	},1000);

	$('.side').click(function(){  //侧栏下拉
		if(that.lock != true){
			$('.sideNav ul').hide(500);
			$(this).next().slideToggle(500);
		}	
		that.lock = true;
	});

	$('.testClick').click(function(){ //测试点击侧边栏的选项
		that.myAjax('item');
	});

	$('.testMy').click(function(){ //测试点击侧边栏的选项
		that.myAjax('tip');
	});


	$('.thead li').click(function(){  //why not use addClass,beacuser i show
		$('.thead li').css({
			marginTop:'0px',
			background:'#fff',
			color:'#000'
		});
		$(this).css({
			marginTop:'1px',
			background:'#000',
			color:'#fff'
		});
	});


};