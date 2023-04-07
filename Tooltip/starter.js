window.addEventListener("load" , function(){
    const text = this.document.querySelector(".text");
    text.addEventListener("mouseenter", function(event){
        const title = event.target.dataset.tooltip;
        // console.log(title);
        const tootipDiv = document.createElement("div");
        tootipDiv.className = "tooltip-text";
        tootipDiv.textContent = title;
        document.body.appendChild(tootipDiv);

        const cords = event.target.getBoundingClientRect();
        console.log(cords)
        const {top, left, width, height} = cords;
        const tooltipHeight = tootipDiv.offsetHeight;
        const triangleHeight = 20;
        tootipDiv.style.left =`${left - width/2}px`;
        tootipDiv.style.top =`${top - tooltipHeight - triangleHeight}px`;
    });
    text.addEventListener("mouseleave", function(event){
        const tooltip = document.querySelector(".tooltip-text");
        if(!tooltip) return;
        tooltip.parentNode.removeChild(tooltip);
    })
});