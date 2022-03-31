function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
var sec = document.getElementById("seconds");
var rotationsec = 0;
var hour = document.getElementById("hour")
var rotationhour = 0;
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    rotationsec +=6
    sec.style.transform = `rotate(${rotationsec}deg)`
    console.log(sec.style.transform)
}, 1000);

var hour = document.getElementById("hour")
var rotationhour = 0;
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    rotationhour +=6
    hour.style.transform = `rotate(${rotationhour}deg)`
    console.log(hour.style.transform)
}, 3.6e+6);

var min = document.getElementById("minutes")
var rotationmin = 0;
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    rotationmin +=6
    min.style.transform = `rotate(${rotationmin}deg)`
    console.log(min.style.transform)
}, 60000);
