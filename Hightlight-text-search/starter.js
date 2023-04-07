window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  let filter = "";
  input.addEventListener("input", handleClick);
  // input nó sẽ lấy value(giá trị ) mỗi khi chúng ta gõ
  function handleClick(e) {
    filter = e.target.value;
    filter = filter.toLowerCase();
    [...items].forEach((item) => {
      const text = item.textContent;
      const index = text.toLowerCase().indexOf(filter);
      console.log(index);
      if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
        item.innerHTML = `${text.substring(
          0,
          index
        )}<span class="primary">${text.substring(
          index,
          index + filter.length
        )}</span>${text.substring(index + filter.length)}`;
      }
    });
  }
});
