let mainVideo = document.getElementById("video"),
  playPause = document.querySelector(".playPause i"),
  progressBar = document.querySelector(".progress-bar"),
  fastforward = document.querySelector(".forward i"),
  fastbackward = document.querySelector(".backward i"),
  speedzerofive = document.getElementsByClassName("speed0.5"),
  speedzerosevenfive = document.getElementsByClassName("speed0.75"),
  speednormal = document.getElementsByClassName("speed1"),
  speedonefive = document.getElementsByClassName("speed1.5"),
  speedtwo = document.getElementsByClassName("speed2"),
  setvolume = document.querySelector(".left range");

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
speedzerofive.addEventListener("click", () => {
  mainVideo.currentTime -= 0.5;
});
speedzerosevenfive.addEventListener("click", () => {
  mainVideo.currentTime -= 0.5;
});
speednormal.addEventListener("click", () => {
  mainVideo.currentTime == 0;
});
speedonefive.addEventListener("click", () => {
  mainVideo.currentTime += 1.5;
});
speedtwo.addEventListener("click", () => {
  mainVideo.currentTime += 2;
});
// en of playback speed

// start of volume
setvolume.addEventListener("input", (e) => {
  mainVideo.volume = e.target.value;
});
