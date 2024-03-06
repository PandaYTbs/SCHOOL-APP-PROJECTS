let timeShow = document.querySelector('#timeShow');
let timeShowNow = "";
let timeNow = "";
let timeState = "";
let state = 1;


zegar();
let divs = document.querySelectorAll(".here"), i


function zegar(){
let teraz = new Date();
let sekunda = teraz.getSeconds();
sekunda = sekunda <10 ? "0" + sekunda : sekunda
let minuta = teraz.getMinutes();
minuta = minuta <10 ? "0" + minuta : minuta
let godzina = teraz.getHours();
godzina = godzina <10 ? "0" + godzina : godzina

let separator = (sekunda % 2 == 0) ? " " : ":"

timeShowNow = `${godzina}${separator}${minuta}${separator}${sekunda}`
timeShow.innerHTML = timeShowNow

setTimeout("zegar()",1000)

}

function press() {
if (state){
    document.querySelector("div div div").innerText = timeShowNow;
    document.querySelector("div div div").classList.toggle("border");
    timeState = timeNow;
    state = !state;
}else {
    document.querySelector("div div div + div").innerText = timeShowNow;
    document.querySelector("div div div + div").classList.toggle("border");
    document.querySelector("div div div").classList.toggle("border");

    document.querySelector("div div div + div + div").innerText=timeDif(timeState,timeNow);
    state = !state;
}
}
function timeDif(t1,t2){
    let t2ms = Number(t2.slice(-2));
    let t2mm = Number(t2.slice(-5,-2));
    let t2mh = Number(t2.slice(-8,-5));
    let t2now = t2ms+t2mm*60+t2mh*3600

    let t1ms = Number(t1.slice(-2));
    let t1mm = Number(t1.slice(-5,-2));
    let t1mh = Number(t1.slice(-8,-5));
    let t1now = t1ms+t1mm*60+t1mh*3600

    return msToTime((t2now - t1now)*1000);
}
function msToTime(ms){
    let miliseconds = ms % 1000;
    let seconds = Math.floor((ms / 1000) % 60);
    seconds = seconds<10 ? "0" + seconds : seconds;
    let minutes = Math.floor((ms / (60 * 1000)) % 60);
    minutes = minutes<10 ? "0" + minutes : minutes;
    let hours = Math.floor((ms / (60 * 60 * 1000)) % 60);
    hours = hours<10 ? "0" + hours : hours;
    return `${hours}:${minutes}:${seconds}`
}

zegar();