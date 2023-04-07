window.addEventListener("load", function () {
  const song = document.querySelector("#song");
  const playButton = document.querySelector(".player-play");
  const prevButton = document.querySelector(".player-prev");
  const nextButton = document.querySelector(".player-next");
  const playerDuration = document.querySelector(".player-duration");
  const remaining = document.querySelector(".player-remaining");
  const progressBar = document.querySelector("#progress-bar");
  const playerImage = document.querySelector(".player-image");
  let playing = true;
  const list = [
    "Tan-Remix-Tuan-Hung.mp3",
    "Nang-Tho-Hoang-Dung.mp3",
    "Doi-Thay-Remix-Chau-Khai-Phong.mp3",
  ];
  let songIndex = 0;
  playButton.addEventListener("click", handleMusicPlay);
  nextButton.addEventListener("click", function () {
    handleChangeMusic(1);
  });
  prevButton.addEventListener("click", function () {
    handleChangeMusic(-1);
  });
  song.addEventListener("ended", function () {
    handleChangeMusic(1);
  });

  // song.duration ->

  function handleChangeMusic(dir) {
    if (dir === 1) {
      // next music
      songIndex++;
      if (songIndex > list.length - 1) {
        songIndex = 0;
      }
      // listsongIndex
      song.setAttribute("src", `file/${list[songIndex]}`);
      playing = true;
      handleMusicPlay();
    } else if (dir === -1) {
      songIndex--;
      if (songIndex < 0) {
        songIndex = list.length - 1;
      }
      song.setAttribute("src", `file/${list[songIndex]}`);
      playing = true;
      handleMusicPlay();
    }
  }

  function handleMusicPlay() {
    if (playing) {
      song.play();
      playerImage.classList.add("is-playing");
      playButton.classList.add("fa-pause");
      playing = false;
    } else {
      song.pause();
      playerImage.classList.remove("is-playing");
      playButton.classList.remove("fa-pause");
      playing = true;
    }
  }

  function displayTime() {
    const { duration, currentTime } = song;
    progressBar.max = duration;
    progressBar.value = currentTime;
    remaining.textContent = formatTimer(currentTime);
    if (!duration) {
      playerDuration.textContent = "0:00";
    } else {
      playerDuration.textContent = formatTimer(duration);
    }
  }
  function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
  progressBar.addEventListener("change",handleDragProgressBar);
  function handleDragProgressBar (){
    song.currentTime = progressBar.value;
  }
  displayTime();
  const timer = this.setInterval(displayTime, 500);
});
