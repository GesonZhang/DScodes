requirejs.config({
	baseUrl:'jquery/',
	paths:{
		jquery:"jquery-1.12.4"
	}
});
define(['requery'],function($){
	return{//在创建弹层时就将css写好，这样不会出现创建了弹层再加CSS而出现闪烁；体验更好
		open:function(option){
			var $this = this;
			var defauleVal = {
				width:400,
				height:300,
				opacity:0.5,
				title:'标题'
			}；
		option = $.extend(defauleVal,option);
		var $dialogBox = $('<div class="dialog-box"></div>').ccss('background','rgba(0,0,0,'+option.opacity+')');
		var $content = $('<div class="content"></div>').css({
				width:option.width,
				height:option.height,
				marginLeft:-option.width/2,
				marginRight:-option.height/2
			});
		var $dialogTitle = $('<div class="dialog-title"></div>');
		var $dialogText = $('<span class="title">'+option.title+'</span>');
		var $dialogClose = $('<span class="dialog-close">X</span>');
		var $dialogBody = $('<div class="dialog-body"></div>').html($(option.content).clone().show());
		$dialogBox.append($content);
		$content.append($dialogTitle).append($dialogBody);
		$dialogTitle.append($dialogText).append($dialogClose);
		$('body').append($dialogBox);
        $$dialogClose.on('click',function(){
        	$this.close();
        });


		}
		close:function(){
			$('.dialog-box').remove();
		}
	}
})