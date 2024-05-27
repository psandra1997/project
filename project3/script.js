const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");


const checkPhoneNumber=()=>{
  const inp =input.value;
            console.log("input "+inp);
  if(inp === ""){
    alert("Please provide a phone number");
    return;
  }


const regex = /^(1\s?)?(\(\d{3}\)|\d{3})\s?\-?\d{3}(\s|\-)?\d{4}$/;

console.log("regex "+regex);
console.log("regex: "+regex.test(inp));

result.innerHTML += `${(regex.test(inp))? 'Valid' : 'Invalid'} US number: ${inp} <br>`;
input.value='';
};

const clearResults=()=>{
result.textContent="";
}
check.addEventListener("click",checkPhoneNumber);
clear.addEventListener("click",clearResults);