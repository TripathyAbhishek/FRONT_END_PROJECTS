function ispalindrome(str){
const cleanStr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
// console.log(cleanStr);
const reversedStr=cleanStr.split('').reverse().join('');
// console.log(reversedStr);
return cleanStr === reversedStr;

}
function palindromechecker(){
    const inputText= document.getElementById('inputText');
    const result= document.getElementById('result');
    if(ispalindrome(inputText.value)){
        result.textContent =`"${inputText.value}" is a palindrome`;
    }
        else{
         result.textContent=`"${inputText.value}" is not a palindrome`;
        }
        result.classList.add('fadeIn');
        inputText.value='';

    }

document.getElementById('checkbutton').
addEventListener("click",palindromechecker);
    
