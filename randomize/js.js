// const result_1 = document.querySelector("#result_1");
// const body = document.querySelector("body");
// const radioX = document.querySelectorAll('input[type="radio"]');
// let sV = 0;
// radioX.forEach(radio =>{
//     if(radio.checked){
//         result_1.innerHTML = `Wybrano: ${radio.value}`
//         sV = Number(radio.value.slice(1));
//         checkedColor();
//     }
//     radio.addEventListener("click",()=>{
//         result_1.innerHTML = `Wybrano: ${radio.value}`
//         sV = Number(radio.value.slice(1));
//         checkedColor();
//     });
// });


// function setColor(bc){
//     body.style.backgroundColor = bc;
// }

// function checkedColor(){
//     if(sV===1){setColor("red")}
//     if(sV===2){setColor("green")}
//     if(sV===3){setColor("orange")}
//     if(sV===4){setColor("blue")}
// }

const body = document.querySelector('body');
const textMin = document.querySelector('.minVal');
const textMax = document.querySelector('.maxVal');
let rand = 0;

let minVal = 0;
let maxVal = 100;

function changeValueMin() {
    textMin.innerText = `Min: ${document.querySelector('minRange').value}`;
}

function changeValueMax() {
    textMax.innerText = `Max: ${document.querySelector('maxRange').value}`;
}

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}