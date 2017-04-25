/**
 * Created by Administrator on 2017/4/24.
 */
function getClass(clsName,context){
    var result = [];
    context=context||document;
    var arr = context.getElementsByTagName('*');
    for (var i=0;i<arr.length;i++){
        if(arr[i].className.indexOf(clsName)!=-1){
            //(arr[i].className.indexOf(clsName)!=-1)
            result.push(arr[i]);
        }
    }
    return result;
}
var oTipsBox = document.getElementById('tips-box'),
    oSelect = document.getElementById('select'),
    aInner = getClass('inner-box'),
    aName = oSelect.getElementsByTagName('li');
    for (var i=0;i<aName.length;i++ ){
        aName[i].num =i;
        aName[i].onclick = function(){
            for(var j=0;j<aName.length;j++){
                aInner[j].style.display = 'none';
                aName[j].className = '';
            }
            aInner[this.num].style.display = 'block';
            this.className = 'selected';
        }
    }