function Stage(){
	this.myClick();
	this.lock = false;
};
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
		$.ajax({
			type:'GET',
			url:'test.json',
			dataType:'json',
			success:function(data){
				$.each(data,function(i,n){
					console.log(n);
					console.log(i);
					for(var j = 0; j < n.length; j++){
						var nl = '<tr>';  //一条数据
							nl += '<td class="radio">';
							nl += '<input type="radio">';
							nl += '</td>';
							nl += '<td class="tablenomal">'+n[j].first+'</td>';
							nl += '<td class="tablenomal">'+n[j].seccond+'</td>';
							nl += '</tr>';
						$('table').append(nl);
					}

				});
			},
			error:function(e){
				console.log('cuole')
			}
		});
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