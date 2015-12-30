function Stage(){
	this.myProto();
}
Stage.prototype.myProto=function(){

	$('.header .photo').click(function(){ /*侧滑栏*/
		$('.container').toggleClass('addAni');
		$('.sideNav').toggleClass('reduAni');
	});

	$('.side').click(function(){
		$('.sideNav ul').hide(500);
		$(this).next().slideToggle(500);
	});

}