requirejs.config({
	baseUrl:'jquery/',
	paths:{
		jquery:"jquery-1.12.4"
	}
});
define(['requery'],function($){
	return{//在创建弹层时就将css写好，这样不会出现创建了弹层再加CSS而出现闪烁；体验更好
		//两个方法中公用，一种是可以提到全局，另一种是将共用部分变成属性；
		open:function(option){
			var _this = this;
			var defauleVal = {
				width:400,
				height:300,
				opacity:0.5,
				title:'标题'
			}；
		option = $.extend(defauleVal,option);
		this.$dialogBox = $('<div class="dialog-box"></div>').ccss('background','rgba(0,0,0,'+option.opacity+')');
		this.$content = $('<div class="content"></div>').css({
				width:option.width,
				height:option.height,
				marginLeft:-option.width/2,
				marginRight:-option.height/2
			});
		this.$dialogTitle = $('<div class="dialog-title"></div>');
		this.$dialogText = $('<span class="title">'+option.title+'</span>');
		this.$dialogClose = $('<span class="dialog-close">X</span>');
		this.$dialogBody = $('<div class="dialog-body"></div>').html($(option.content).clone().show());
		this.dialogBox.append(this.$content);
		this.$content.append(this.$dialogTitle).append(this.$dialogBody);
		this.$dialogTitle.append(this.$dialogText).append(this.$dialogClose);
		$('body').append(this.$dialogBox);
        this.$dialogClose.on('click',function(){
        	_this.close();
        });


		}
		close:function(){
			this.$dialogBox.remove();
		}
	}
})