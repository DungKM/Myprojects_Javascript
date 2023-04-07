
window.addEventListener("load", function(){
    const links = [...document.querySelectorAll(".menu-link")];
links.forEach(item => item.addEventListener("mouseenter", handleHoverLink));
const line = this.document.createElement("div");
line.className="line-effect";
this.document.body.appendChild(line)
   function handleHoverLink(event){
    // console.log(event.target);
    const {left, top, width, height} = event.target.getBoundingClientRect();
//    console.log({left, top, width, height})
const offset = 5;
line.style.width = `${width}px`;
line.style.left = `${left}px`;
line.style.top = `${top + height+offset}px`;
   }
   const menu = this.document.querySelector(".menu");
   menu.addEventListener("mouseleave", function(event){
   line.style.width=0;
   })

})