const countdown = () => {
    const countDate = new Date("June 13,2021 01:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    if(gap > 0){
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap%day) / hour);
    const textMinute = Math.floor((gap%hour) / minute);
    const textSecond = Math.floor((gap%minute) / second);

    // var x = hr < 10? "0"+hr : hr;
    // var y = mm < 10? "0"+mm : mm;
    // var z = ss < 10? "0"+ss : ss;
    
    var _day = textDay < 10? "0"+textDay : textDay;
    var _hour = textHour < 10? "0"+textHour : textHour;
    var _minute = textMinute < 10? "0"+textMinute : textMinute;
    var _second = textSecond < 10? "0"+textSecond : textSecond;

    document.querySelector(".day").innerHTML = _day;
    document.querySelector(".hour").innerHTML = _hour;
    document.querySelector(".minute").innerHTML = _minute;
    document.querySelector(".second").innerHTML = _second;
    }

}
setInterval(countdown,1000);