const progress = document.querySelector(".progress");
window.addEventListener("scroll", function(){
    const scrollTop = this.window.pageYOffset;
    const height = 

    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

const width = (scrollTop / height)*100;
progress.style.width = `${width}%`;


})