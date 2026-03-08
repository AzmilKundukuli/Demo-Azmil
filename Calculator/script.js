let calculated=false;

function equalclick(){
    if(calculated) return;

    var text=document.getElementById("screen").value;

    try{
        var result=eval(text);
        document.getElementById("screen").value=result;
        calculated=true;
    }catch{
        document.getElementById("screen").value="Error";
    }
}

function buttonclick(val){
    if(calculated){
        document.getElementById("screen").value="";
        calculated=false;
    }
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clearDisplay(){
    document.getElementById("screen").value="";
    calculated=false;
}