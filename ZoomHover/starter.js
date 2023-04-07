

window.addEventListener("load", function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove", handleHoverImage);
const imageWrapper = document.querySelector(".image-wrapper");
let imageWrapperWidth = imageWrapper.offsetWidth;
let imageWrapperHeigth = imageWrapper.offsetHeight;
const image = document.querySelector(".image");
function handleHoverImage(e){
    const pX = e.pageX;
    const pY = e.pageY;
   image.style="width: auto; height:auto; max-height: unset";
   let imageWidth = image.offsetWidth;
   let imageHeight = image.offsetHeight;

   let spaceX = (imageWidth / 2 - imageWrapperWidth) * 2;
   let spaceY = (imageHeight / 2 - imageWrapperHeigth) * 2;
   imageWidth = imageWidth + spaceX;
   imageHeight = imageHeight + spaceY;
   let radioX = imageWidth / imageWrapperWidth/2;
   let radioY = imageHeight / imageWrapperHeigth /2;
   let x =(pX - imageWrapper.offsetLeft)  * radioX;
   let y = (pY - imageWrapper.offsetTop) * radioY;

//    console.log(imageWrapperWidth, imageWrapperHeigth);
   image.style=`left :${x}px; top: ${y}px; width: auto; height: auto; max-height: unset;`;

   }
   imageCover.addEventListener("mouseleave", handleLeaveImage);
   function handleLeaveImage (){
    image.style= "";
   }

});


