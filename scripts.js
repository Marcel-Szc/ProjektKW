function updateclock(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }else{
        hours = hours;
    }
    
    minutes = (minutes<10) ? "0" + minutes : minutes;
    seconds = (seconds<10) ? "0" + seconds : seconds;

    document.getElementById("hours").textContent = hours + ":";
    document.getElementById("minutes").textContent = minutes + ":";
    document.getElementById("seconds").textContent = seconds;

}

setInterval(updateclock,1000)
updateclock();