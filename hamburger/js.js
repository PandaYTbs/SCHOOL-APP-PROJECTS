const menuBtn1 = document.querySelector('.hamburger1');
const menu1 = document.querySelector('.nav1');
menuBtn1.addEventListener('click', () => {
    menuBtn1.classList.toggle('is-active');
    menu1.classList.toggle('is-active');
})
 
 
const menuBtn2 = document.querySelector('.hamburger2');
const menu2 = document.querySelector('.nav2');
menuBtn2.addEventListener('click', () => {
    menuBtn2.classList.toggle('is-active');
    menu2.classList.toggle('is-active');
})
 
 
const menu21 = document.querySelector(".abc");
menu21.style.opacity = "0";
 
function abc(){
    console.log("abc");
    menu21.style.opacity = "1";
};



// const menuBtn1 = document.querySelector('.hamburger1');
// const menu1 = document.querySelector('.nav1');
// menuBtn1.addEventListener('click', () => {
//     menuBtn1.classList.toggle('is-active');
//     menu1.classList.toggle('is-active');
// })