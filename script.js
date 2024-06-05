let mainVideo = document.getElementById("video"),
  playPause = document.querySelector(".playPause i"),
  progressBar = document.querySelector(".progress-bar"),
  fastforward = document.querySelector(".forward i"),
  fastbackward = document.querySelector(".backward i"),
  speedoption = document.querySelector("speed-option"),
  setvolume = document.querySelector(".left input"),
  option = document.getElementsByClassName("dropdown-item"),
  slower = document.getElementsByClassName("speed0.5"),
  volumebtn = document.querySelector(".volumebtn i");

// start of play pause btn scripting
playPause.addEventListener("click", () => {
  mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

mainVideo.addEventListener("play", () => {
  playPause.classList.replace("fa-play", "fa-pause");
});
mainVideo.addEventListener("pause", () => {
  playPause.classList.replace("fa-pause", "fa-play");
});
// end og play pause btn scripting

// progress bar width according to video
mainVideo.addEventListener("timeupdate", (e) => {
  let { currentTime, duration } = e.target; //getting current time and duration of video
  let percent = (currentTime / duration) * 100; //percentage of video.
  // console.log(percent);
  progressBar.style.width = `${percent}%`;
});
// end of progress bar script

// start of fast forward code
fastforward.addEventListener("click", () => {
  mainVideo.currentTime += 2;
});
// end

// start of fast backward code
fastbackward.addEventListener("click", () => {
  mainVideo.currentTime -= 2;
});
// end

// playback speed
slower.addEventListener("click", () => {
  mainVideo.playbackRate -= 2;
  alert(mainVideo.playbackRate);
});
