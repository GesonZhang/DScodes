requirejs.config({
	baseUrl:'jquery/',
	paths:{
		jquery:"jquery-1.12.4"
	}
});
define(['jquery','dialogRe'],function($,Dialog){
	$('.small-img li').on('click',function(){
		var dialog1 = new Dialog({
            height:400,
            opacity:0.9,
            title:hahaha，
			content:'.div1'
		});
		dialog1.open();
	});
	$('body').on('click','#login-btn',function(){
        var dialog2 = new Dialog({
            height:400,
            opacity:0.9,
            title:hahaha，
			content:'.div1'
    });
        dialog2.open();
	})

})

