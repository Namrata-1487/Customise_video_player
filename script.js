let mainVideo = document.getElementById("video"),
  playPause = document.querySelector(".playPause i"),
  progressBar = document.querySelector(".progress-bar");

playPause.addEventListener("click", () => {
  mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

mainVideo.addEventListener("play", () => {
  playPause.classList.replace("fa-play", "fa-pause");
});
mainVideo.addEventListener("pause", () => {
  playPause.classList.replace("fa-pause", "fa-play");
});

mainVideo.addEventListener("timeupdate", (e) => {
  let { currentTime, duration } = e.target; //getting current time and duration of video
  let percent = (currentTime / duration) * 100; //percentage of video.
  console.log(percent);
  progressBar.style.width = percent;
});
