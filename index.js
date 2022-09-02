var getBtn = document.querySelector(".cn");
var getInp = document.querySelector("#getInp");

getBtn.addEventListener("click",()=>{
var inpt = getInp.value;
var pass = "CE@IIIT";
if(pass === inpt){
    location.href = "assinment2.html";
}
else{
    console.log("wrong ans:"+inpt);
}
}
)