const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);
// console.log(counterValue);
buttonPlus.addEventListener("click", function(){
    if(counterValue >= 10) return 10;
    counterValue++; 
    // counterValue=counterValue+1;
    // counterValue+= 1;
    // console.log(counterValue);
    counterNumber.textContent= counterValue;
});
buttonMinus.addEventListener("click", function(){
    if(counterValue <= 0) return 0;
    counterValue--;
    // counterValue=counterValue-1;
    // counterValue-= 1;
    // console.log(counterValue);
    counterNumber.textContent= counterValue;
});