const inputValue=document.getElementById("text-input");
const btn=document.getElementById("check-btn");
const result=document.getElementById("result");


function isPalindrom(str1){

const st=str1.replace(/[^A-Za-z0-9\/\:]/g,'').toLowerCase();
const str2=st.split('').reverse().join('');

if(st===str2){
  return true;
}else{
return false;
}}

const checkBtn=()=>{
const str1=document.getElementById("text-input").value;
if(str1===""){ 
  alert("Please input a value");
}else{
  if(isPalindrom(str1)){
    result.innerHTML=`${str1} is a palindrome.`;
}else{
    result.innerHTML=`${str1} is not a palindrome.`;
}}}

btn.addEventListener("click",checkBtn());