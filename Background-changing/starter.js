const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const colors =["#FCE2DB", "#FF8FB1","#B270A2","#7A4495"]

function handleChangeColor(){
    //    document.body.setAttribute("style", "background-color: red");
    // lấy random màu từ mảng colors
    const color = colors[Math.floor(Math.random()*colors.length)];
    // document
    document.body.style.background = color;
}