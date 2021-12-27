
// the items 

var btnMoins1 = document.getElementById('btnMoins1');
var btnMoins2 = document.getElementById('btnMoins2');
var btnPlus1 = document.getElementById('btnPlus1');
var btnPlus2 = document.getElementById('btnPlus2');
var items1 = document.getElementById('items1');
var items2 = document.getElementById('items2');

var i = 0; 
var i2 = 0; 
btnPlus1.addEventListener('click', function(){
    i++;
    items1.innerText=i;
});
btnPlus2.addEventListener('click', function(){
    i2++;
    items2.innerText=i2;
});
btnMoins1.addEventListener('click', function(){
    
    if(i <=0){
        i= 0;
        items1.innerText= i;
    }else{
        i--;
    items1.innerText= i;
    }
});
btnMoins2.addEventListener('click', function(){
    
    if(i2 <=0){
        i2= 0;
        items2.innerText= i2;
    }else{
        i2--;
    items1.innerText= i2;
    }
});