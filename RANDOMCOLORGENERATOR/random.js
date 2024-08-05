
const containerel=document.querySelector(".container");

for(let index=0;index<50;index++){
    const colorcontainerel=document.createElement("div");
    colorcontainerel.classList.add("color-container");

    const colorcodeel=document.createElement("span");
    colorcodeel.classList.add("color-code");
    colorcontainerel.appendChild(colorcodeel);

    const copybutton=document.createElement("button");
    copybutton.innerText="copy";
    colorcontainerel.appendChild(copybutton);

    containerel.appendChild(colorcontainerel);
    console.log(containerel);

}
function randomcolor(){
const chars="0123456789ABCDEF";
const colorcodelength=6;
let colorcode="";

for(let index=0;index<colorcodelength;index++){
    const randomnum=Math.floor(Math.random() *chars.length);
    colorcode += chars.substring(randomnum,randomnum+1);

}
return colorcode;
}

const colorcontainerels=document.querySelectorAll(".color-container");
colorgenerate();

function colorgenerate(){
for(let i=0;i<colorcontainerels.length;i++){
const colorcontainerel=colorcontainerels[i];
const newcolorcode=randomcolor();
const colorcodeel=colorcontainerel.querySelector(".color-code");
colorcontainerel.style.backgroundColor ="#"+ newcolorcode;
colorcodeel.innerText="#"+ newcolorcode;
}
}



colorcontainerels.forEach((colorcontainerel)=>{
    const copybuttonel=colorcontainerel.querySelector("button");
    const colorcodeel=colorcontainerel.querySelector(".color-code")

    copybuttonel.addEventListener("click",()=>{
const colorcode=colorcodeel.innerText;
copytoclipboard(colorcode);
    });
});
function copytoclipboard(text){
    navigator.clipboard.writeText(text).then(()=>{
        alert("copied to clipboard" +text);
    })
    .catch((error)=>{
        console.log("failed to copy:",error);
    });
}