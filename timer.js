/*window.onload =()=>{
    document.querySelector('#calculate').onclick= calculate;
    document.querySelector('#reset').onclick= reset;
}

function calculate(){
    const date= document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    const stop =document.querySelector('#stop');
     
    const endTime = new Date();

    const interval = setInterval (()=>calculateTime(endTime),1000);

    stop.addEventListener('click',()=>{
        clearInterval(interval);
    })
}
 
function calculateTime(endTime){
    const currentTime = new Date().getTime();

    const days= document.querySelector('#countdown-days');
    const hours= document.querySelector('#countdown-hours');
    const minutes= document.querySelector('#countdown-minutes');
    const seconds= document.querySelector('#countdown-seconds');


     if (endTime > currentTime){
        const timeLeft= (endTime - currentTime)/1000;

        console.log(timeLeft);
        days.innerText = Math.floor(timeleft/(24*60*60));
        hours.innerText = Math.floor((timeleft/(60*60))%24);
        minutes.innerText = Math.floor((timeleft/60)%60);
        seconds.innerText = Math.floor(timeLeft%60);

     }else{

        days.innerText=0
        hours.innerText=0
        minutes.innerText=0
        seconds.innerText=0
     }
}

function reset(){

     document.querySelector('#countdown-days').innerText=0;
     document.querySelector('#countdown-hours').innerText=0;
     document.querySelector('#countdown-minutes').innerText=0;
     document.querySelector('#countdown-seconds').innerText=0;
}*/

window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
}

function calculate() {
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    if (!date || !time) {
        alert('Please enter both date and time.');
        return;
    }

    const endTime = new Date(`${date}T${time}`);
    
    if (isNaN(endTime)) {
        alert('Invalid date or time.');
        return;
    }

    const interval = setInterval(() => calculateTime(endTime), 1000);

    document.querySelector('#stop').onclick = () => {
        clearInterval(interval);
    };
}

function calculateTime(endTime) {
    const currentTime = new Date().getTime();
    const timeLeft = (endTime.getTime() - currentTime) / 1000;

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (timeLeft > 0) {
        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
        clearInterval(interval); // Clear the interval when countdown reaches zero
    }
}

function reset() {
    document.querySelector('#countdown-days').innerText = 0;
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-minutes').innerText = 0;
    document.querySelector('#countdown-seconds').innerText = 0;
}
