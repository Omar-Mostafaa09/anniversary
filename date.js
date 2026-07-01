var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {

    // تاريخ بداية العلاقة: 20 يوليو 2025 الساعة 00:00
    var start = new Date(2025, 6, 20, 0, 0, 0);

    // التاريخ الحالي
    var now = new Date();

    // للمساعدة في اكتشاف أي مشكلة
    console.log("Now:", now);
    console.log("Start:", start);

    // فرق الوقت بالمللي ثانية
    var t = now.getTime() - start.getTime();

    console.log("Difference:", t);

    // لو التاريخ الحالي قبل البداية
    if (t < 0) {
        t = 0;
    }

    var d = Math.floor(t / (1000 * 60 * 60 * 24));
    var h = Math.floor((t / (1000 * 60 * 60)) % 24);
    var m = Math.floor((t / (1000 * 60)) % 60);
    var s = Math.floor((t / 1000) % 60);

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    } else {
        clearInterval(fadeinInterval);
        if (ok == 2) {
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);

fadeInterval = setInterval(function () {
    if (ok == 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);
