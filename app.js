setInterval(()=>{
   let currDate= new Date();
   let hour=currDate.getHours();
   let minutes=currDate.getMinutes();
   let seconds=currDate.getSeconds();
   let milliSeconds=currDate.getMilliseconds();
   let hourDegree=30*hour+minutes/2;
   let minutesDegree=6*minutes+seconds/10;
   let secondsDegree=6*seconds+(6*milliSeconds)/1000;
   document.querySelector(".hour").style.transform=`rotate(${hourDegree}deg)`
   document.querySelector(".minute").style.transform=`rotate(${minutesDegree}deg)`
   document.querySelector(".second").style.transform=`rotate(${secondsDegree}deg)`
},1)