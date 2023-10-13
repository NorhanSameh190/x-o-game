var start="o";
var title=document.querySelector(".title");


var Arr=[];

function check(){
    for(var i=1 ; i<10 ;i++){
        Arr[i]=document.getElementById("item"+i).innerHTML;
    }
    console.log(Arr);
    if(Arr[1] == Arr[2] && Arr[2] == Arr[3] && Arr[1]!=""){
        show(1,2,3)
    }
    else if(Arr[4] == Arr[5] && Arr[5] == Arr[6] && Arr[4]!=""){
        show(4,5,6)
        
    }else if(Arr[7] == Arr[8] && Arr[8] == Arr[9] && Arr[7]!=""){
        show(7,8,9)
        
    }else if(Arr[1] == Arr[4] && Arr[4] == Arr[7] && Arr[1]!=""){
        show(1,4,7)
        
    }else if(Arr[2] == Arr[5] && Arr[5] == Arr[8] && Arr[2]!=""){
        show(2,5,8)
        
    }else if(Arr[3] == Arr[6] && Arr[6] == Arr[9] && Arr[3]!=""){
        show(3,6,9)
        
    }else if(Arr[1] == Arr[5] && Arr[5] == Arr[9] && Arr[1]!=""){
        show(1,5,9)
        
    }else if(Arr[3] == Arr[5] && Arr[5] == Arr[7] && Arr[3]!=""){
        show(3,5,7)
    }
}

function show(num1,num2,num3){
    title.innerHTML=`Winner is ${Arr[num1]}`;
    document.getElementById("item"+num1).style.backgroundColor="#f20";
    document.getElementById("item"+num2).style.backgroundColor="#f20";
    document.getElementById("item"+num3).style.backgroundColor="#f20";
    title.style.color="#000";
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){location.reload()},3000)
}
function game(id){
    let element=document.getElementById(id);
    if(start==="o" &&  element.innerHTML== "" ){
        element.innerHTML="o";
        start="x";
        title.innerHTML="o"
    }else if(start==="x" &&  element.innerHTML== "" ){
        element.innerHTML="x";
        start="o";
        title.innerHTML="x"
    }
    check()
}


