tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      keyframes: {
        wiggle: {
          "50%, 100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s linear 1",
      },
      spacing: {
        150: "150%",
      },
    },
  },
};




window.addEventListener("load", function () {
  function renderSweetAlert() {
    const template = `<div class="content-auto">
    <i class='bx bx-check icons-auto'></i>
    <p class="title-auto">Chúc mừng bạn đã học javascript thành công</p>
       </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  }
  const button = document.querySelector(".button");
  button.addEventListener("click", function () {
    renderSweetAlert();
    const sweetItem = document.querySelector(".content-auto");
    if (sweetItem) {
      setTimeout(function () {
        sweetItem.removeChild(sweetItem);
      }, 100000);
      }
    });
    
  });
  
