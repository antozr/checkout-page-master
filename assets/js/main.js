
// the items 

var btnMoins1 = document.getElementById('btnMoins1');
var btnMoins2 = document.getElementById('btnMoins2');
var btnPlus1 = document.getElementById('btnPlus1');
var btnPlus2 = document.getElementById('btnPlus2');
var items1 = document.getElementById('items1');
var items2 = document.getElementById('items2');
var soldAccount = document.getElementById('soldAccount');

var price1 = 54.99;
var price2 = 74.99; 
var soldTotal =0; 

var i = 0; 
var i2 = 0; 
btnPlus1.addEventListener('click', function(){
    i++;
    items1.innerText=i;
    var soldTotal = (i2 * price2)+ (i * price1); 
    soldAccount.innerText= "$ "+soldTotal.toFixed(2);
});
btnPlus2.addEventListener('click', function(){
    i2++;
    items2.innerText=i2;
    var soldTotal = (i2 * price2)+ (i * price1); 
    soldAccount.innerText= "$ "+soldTotal.toFixed(2);
});
btnMoins1.addEventListener('click', function(){
    if(i <= 0){
        i= 0;
        items1.innerText= i;
    }else{
        i--;
    items1.innerText= i;
    }
    var soldTotal = (i2 * price2)+ (i * price1); 
    soldAccount.innerText="$ "+soldTotal.toFixed(2);
});
btnMoins2.addEventListener('click', function(){
    if(i2 <= 0){
        i2= 0;
        items2.innerText= i2;
    }else{
        i2--;
    items2.innerText= i2;
    }
    var soldTotal = (i2 * price2)+ (i * price1); 
    soldAccount.innerText="$ "+soldTotal.toFixed(2);
});

soldAccount.innerText="$ "+soldTotal.toFixed(2);

var validBtn = document.getElementById('valid');
var allInput = document.querySelectorAll('input');
console.log(allInput);

validBtn.addEventListener('click', function(){
        var allInput = document.querySelectorAll('input');
        console.log(allInput);

  
    if(localStorage.getItem('email')){
        
        localStorage.removeItem("email", allInput[0].value);
        localStorage.removeItem("tel", allInput[1].value);
        localStorage.removeItem("name", allInput[2].value);
        localStorage.removeItem("address", allInput[3].value);
        localStorage.removeItem("city", allInput[4].value);
        localStorage.removeItem("postal", allInput[5].value);

    }else{

    localStorage.setItem("email", allInput[0].value);
    localStorage.setItem("tel", allInput[1].value);
    localStorage.setItem("name", allInput[2].value);
    localStorage.setItem("address", allInput[3].value);
    localStorage.setItem("city", allInput[4].value);
    localStorage.setItem("postal", allInput[5].value);
    allInput[6].checked == true
    
    
    }
});

if(window.location.reload && localStorage.getItem('email')){
    allInput[6].checked= true;
    console.log('reload');
    setTimeout(function(){
        allInput[0].value = localStorage.getItem('email');
        allInput[1].value = localStorage.getItem('tel');
        allInput[2].value = localStorage.getItem('name');
        allInput[3].value = localStorage.getItem('address');
        allInput[4].value = localStorage.getItem('city');
        allInput[5].value = localStorage.getItem('postal');
    }, 100);
}


var btnSub = document.getElementById('btnSub');

btnSub.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('hello btn sub');
    var alpha1 = 0;
    var alpha2 = 0;
    var checkInfo = document.getElementById('checkInfo');
    allInput.forEach(input => {
        if(input.value != ""){
            console.log(input.value);
            alpha1++;

        }else{
            input.style.backgroundColor= "#F2994A30";
            alpha2++;
        }
    });
    if(alpha1 > 6){
        checkInfo.style.display= "block";
        document.querySelector('.check__txt').innerHTML = "Your information is Good, thank's.";
        setTimeout(()=>{
            checkInfo.style.display= "none";
        }, 4000);
    }else{
        checkInfo.style.display= "block";
        document.querySelector('.check__txt').innerHTML = "Sorry, it's lack information.";
        setTimeout(()=>{
            checkInfo.style.display= "none";
        }, 2000);
    }
    console.log(alpha1);
    console.log(alpha2);
})