let clockContainer = document.getElementById("clock-container");
let dateContainer =  document.getElementById("date-container");
let timeContainer =  document.getElementById("time-container");
let stopWatchContainer = document.getElementById("stopwatch-container");
let stopwatch = document.getElementById("stopwatch");
let clockBtn = document.getElementById("clock-btn");
let watchBtn = document.getElementById("watch-btn");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let min = stopwatch.children[0];
let second = stopwatch.children[2];
let mSecond = stopwatch.children[4];
let tenmsCount = 0;
let secondCount  = 0;
let minCount = 0;

let updateEveryTenms;
let updateEverySecond;

dateContainer.innerText = new Date().toDateString();
timeContainer.innerText = new Date().toTimeString().split(' ')[0];
mSecond.innerText = "00";
second.innerText = "00";
min.innerText = "00";


setInterval(updateTime, 1000);

function updateTime(){
   dateContainer.innerText = new Date().toDateString();
   timeContainer.innerText = new Date().toTimeString().split(" ")[0];
}

watchBtn.addEventListener("click",function(){
  stopWatchContainer.style.display = "block";
  clockContainer.style.display = "none";
  watchBtn.className = "active";
  clockBtn.className = "inactive";
})

clockBtn.addEventListener("click", function(){
    clockContainer.style.display = "block";
    stopWatchContainer.style.display = "none";
    clockBtn.className = "active";
    watchBtn.className = "inactive";
})

start.addEventListener("click",function(){
  console.log("start clicked");
   if(start.innerText == "Start"){
    updateEveryTenms = setInterval(incrementEveryTenms, 10);
    start.innerText = "Stop"; // start button text is set to stop
    
   }
   else{
    clearInterval(updateEveryTenms);
    start.innerText = "Start"; // stop button text is set to start
   
   }
   
})
reset.addEventListener("click",function(){
  tenmsCount = 0;
  secondCount = 0;
  minCount = 0;
  clearInterval(updateEveryTenms);
  updateText(minCount, secondCount , tenmsCount);
  start.innerText = "Start"; //  stop button text is set to start

})

function incrementEveryTenms(){
   tenmsCount++;
   if(tenmsCount == 100){
    tenmsCount = 0;
    secondCount++; // every 1000ms, second is incremented
   }
   if(secondCount == 60){
    secondCount = 0;
    minCount++; //  every 60 seconds, min is incremented
   }
   updateText(minCount,secondCount,tenmsCount); // update display 

   
}

function updateText(minCount, secondCount , tenmsCount){
   mSecond.innerText = (tenmsCount < 10)? "0"+ tenmsCount : tenmsCount;  // 00 is display instead of 0
   second.innerText = (secondCount < 10)? "0"+ secondCount : secondCount;
   min.innerText = (minCount < 10)? "0"+ minCount : minCount;
}