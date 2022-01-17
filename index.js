



document.getElementById("bmi_btn").addEventListener("click",bmi_meter);

function bmi_meter(weight,height){
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;
    var bmi=weight/Math.pow(height,2);
    var bmi_round= bmi.toFixed(2);
    if(bmi_round<=18.49){
        document.getElementById("bmi_result").placeholder=bmi_round +" (UnderWeight)";
    }
    else if(bmi_round>=18.50 && bmi_round<=24.99){
        document.getElementById("bmi_result").placeholder=bmi_round +" (Normal)";
    }
    else if(bmi_round>=25.00 && bmi_round<=29.99){
        document.getElementById("bmi_result").placeholder=bmi_round +" (OverWeight)";
    }
else{

    document.getElementById("bmi_result").placeholder=bmi_round+" (Obese)";
}
}

let preloader = document.getElementById('loading')  ;
  function myFunction(){
      preloader.style.display='none';}
