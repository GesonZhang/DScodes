var $imgBox = $('.img-box'),
    $next = $('.next'),
    $pre = $('.pre');
var num = 0;
var now=0;
$next.on('click',function(){
    changeNext();
});
function changeNext(){
    num++;
    if(num == 5){
        num = 0;
        // $imgBox.animate({left:0},'easein');
    }
    $imgBox.animate({
        left:'-'+1002*num+'px'
    },'slow');
    now = num;
}
$pre.on('click',function(){

    now--;
    if(now == -1){
        now = 4;
    }
    // console.log(now);
    $imgBox.animate({
        left:'-'+1002*now+'px'
    },'slow');
    num = now;

});
function run(){
    timer = setInterval(function(){
        changeNext();
    },1500);
}
run();
$imgBox.on('mouseover',function () {
    clearInterval(timer);
});

$imgBox.on('mouseout',function(){
    run();
});