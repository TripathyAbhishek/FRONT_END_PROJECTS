window.addEventListener("load",checkinternet);
function checkinternet(){
    const statusText=document.getElementById('statusText');
    const IPText=document.getElementById('IPText');
    const strengthText=document.getElementById('strengthText');
    statusText.textContent='CHECKING';
     if(navigator.online){
fetch('https.//api/ipify.org/?format=json')
 .then((response)=> response.json())
 .then((data)=>{
    statusText.textContent='connected';
    IPText.textContent= data.ip;
    const connection=navigator.connection;
    const netwrok=connection ?connection.downlink
    +'Mbps' : 'unknown';
    strengthText.textContent = 'networkstrength';

 })
 .catch(()=>{
    statusText.textContent='Disconnected';
    IPText.textContent='_';
    strengthText.textContent='_';
 })



     }
     else
     {
        statusText.textContent='Disconnected';
        IPText.textContent='_';
        strengthText.textContent='_';

     }

}
