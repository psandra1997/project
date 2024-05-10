const input=document.getElementById("number");
const btn=document.getElementById("convert-btn");
const output=document.getElementById("output");

const arrayNum ={
M:1000,
CM:900,
D:500,
CD:400,
C:100,
XC:90,
L:50,
XL:40,
X:10,
IX:9,
V:5,
IV:4,
I:1
};

function convertDecToRom(num){
let rN='';
for(let key in arrayNum){
  while(num >= arrayNum[key]){
    rN += key;
    num -= arrayNum[key];
  }
}
return rN;
  
}
function convertDTR(){
console.log("inp"+input.value)
if(input.value === ''){ output.innerText="Please enter a valid number";
}else if(input.value === '-1'){ output.innerText="Please enter a number greater than or equal to 1"; 
}else if(input.value>3999){output.innerText ="Please enter a number less than or equal to 3999"; 
}else{
const dec=parseInt(input.value);
  const rom=convertDecToRom(dec);
  output.innerText =`${rom}`;
}
}
btn.addEventListener("click",convertDTR());