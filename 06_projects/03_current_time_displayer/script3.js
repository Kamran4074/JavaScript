const clock=document.querySelector('#clock');

// Update the clock every second 
// setInterval takes a function and a time interval in milliseconds
// The function will be called every time the interval elapses
setInterval(function(){
    const now=new Date();
    clock.innerText=now.toLocaleTimeString();
},1000);


