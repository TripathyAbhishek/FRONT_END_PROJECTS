let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displaytime(){
    let date=new Date();
    // console.log(date);

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    // console.log(hh,mm,ss);

    let hrotation=30*hh+ mm/2;
    let mrotation= 6*mm;
    let srotation=6*ss;

    hr.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;

}
setInterval(displaytime,1000);