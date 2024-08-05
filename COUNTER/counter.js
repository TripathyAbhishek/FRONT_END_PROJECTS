document.getElementById("incrementBtn").addEventListener('click',increment);
document.getElementById("decrementBtn").addEventListener('click',decrement);
document.getElementById("resetBtn").addEventListener('click',rset);

let countervalue=0;
let counterDisplay=document.getElementById("counterDisplay");
function updateCounterDisplay(){
    counterDisplay.textContent=countervalue;
};


function increment(){
    countervalue++;
    updateCounterDisplay();
}
function decrement(){
    if(countervalue>0){
    countervalue--;
    updateCounterDisplay();}
}
function rset(){
    countervalue=0;
    updateCounterDisplay()
}