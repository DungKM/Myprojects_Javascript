// Viết 1 function tạo ra thông báo
function createNotification(title, image) {
  const template = `
    <div class="noti">
    <img src="${image}" alt="" class="noti-image">
        <div class="noti-content">
            <h3 class="noti-title">${title}</h3>
            <p class="noti-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deleniti ducimus
            </p>
        </div>
        </div>
    `;

  // insertAdjacentHTML
  document.body.insertAdjacentHTML("afterbegin", template);
}
// createNotification();

const randomData = [
  "Welcome to javascript course ",
  "Welcome to this tutorrial",
  "Today is a good day",
];
const randomImage = [
  "image/elijah-pilchard-uadjEmXw5eQ-unsplash.jpg",
  "image/ismail-mohamed-sovile-RD_VnDHL4oM-unsplash.jpg",
  "image/saul-flores-FVLtSMdwEe8-unsplash.jpg",
];
let lastTitle;
let lastImage;

const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  // lấy ra random title trong mảng randomData
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  const img = randomImage[Math.floor(Math.random() * randomImage.length)];
  if (lastTitle !== title && lastImage !== img) {
    createNotification(title, img);
  }
  lastTitle = title;
  lastImage = img;
}, 4000);
