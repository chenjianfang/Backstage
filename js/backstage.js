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
			console.log(that.lock);
			$('.sideNav ul').hide(500);
			$(this).next().slideToggle(500);
		}	
		that.lock = true;
	});


};