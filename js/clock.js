document.getElementById("myName").innerHTML = prompt("Lütfen adınızı giriniz","Örnek:Mehmet");




function showTime(){
    let datediv = document.getElementById("myClock")
    let now = new Date();
    let hour = now.getHours();
    hour = (hour<10) ? "0"+hour : hour;
    let minute = now.getMinutes();
    minute = (minute<10) ? "0"+minute : minute;
    let second = now.getSeconds();
    second = (second<10) ? "0"+second : second;
    let day = now.getDay();
    var dayname = 
    ((day%7)==1) ? "Pazartesi":
    ((day%7)==2) ? "Salı":
    ((day%7)==3) ? "Çarşamba":
    ((day%7)==4) ? "Perşembe":
    ((day%7)==5) ? "Cuma":
    ((day%7)==6) ? "Cumartesi":
    "Pazar";
    let output = `${hour}:${minute}:${second}     ${dayname}`;
    console.log(output)
    datediv.innerHTML = output;
}
showTime()