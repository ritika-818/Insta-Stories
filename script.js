const story = document.getElementsByClassName("stories-container")[0];
story.addEventListener("click", displayStory);
const videoDisplayContainer = document.getElementsByClassName(
  "video-display-container"
)[0];
const leftStories = document.getElementsByClassName("left-stories")[0];
const rightStories = document.getElementsByClassName("right-stories")[0];
const forwardArrow = document.getElementsByClassName("forward-arrow")[0];
const backwardArrow = document.getElementsByClassName("backward-arrow")[0];
let storyId = "0";
forwardArrow.addEventListener("click", () => {
  story.scrollBy({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
});

backwardArrow.addEventListener("click", () => {
  story.scrollBy({
    top: 0,
    left: -100,
    behavior: "smooth",
  });
});

const arr = [
  "https://cdn.pixabay.com/video/2020/01/16/31301-385265740_tiny.mp4",
  "https://cdn.pixabay.com/video/2018/08/10/17723-284467863_tiny.mp4",
  "https://cdn.pixabay.com/video/2024/03/08/203449-921267347_tiny.mp4",
  "https://cdn.pixabay.com/video/2024/04/12/207752_tiny.mp4",
  "https://cdn.pixabay.com/video/2021/07/29/83097-581045348_tiny.mp4",
  "https://cdn.pixabay.com/video/2024/06/24/218016_tiny.mp4",
  "https://cdn.pixabay.com/video/2023/08/22/177223-857013274_tiny.mp4",
  "https://cdn.pixabay.com/video/2022/06/15/120409-720891985_tiny.mp4",
  "https://cdn.pixabay.com/video/2015/08/12/365-136081982_tiny.mp4",
];

function displayStory(e) {
  videoDisplayContainer.style.backgroundColor = "black";
 storyId = e.target.id;
  console.log(storyId);
  videoDisplayContainer.style.display = "flex";
  story.style.display = "none";

  const videoContainer = document.getElementsByClassName("video-container")[0];
  videoContainer.innerHTML = "";

  const video = document.createElement("video");
  video.classList.add("video");
  video.setAttribute("height", "600");
  video.setAttribute("controls", "true");
  const cross = document.createElement("div");
  cross.classList.add("cross-icon");
  videoContainer.appendChild(cross);
  const source = document.createElement("source");
  source.setAttribute(
    "src",arr[storyId]
  );
  source.setAttribute("type", "video/mp4");
  video.appendChild(source);

  videoContainer.appendChild(video);

  const leftVideos = leftStories.querySelectorAll("video");
  const rightVideos = rightStories.querySelectorAll("video");

  leftVideos.forEach((video) => {
    video.addEventListener("click", () => swapVideos(video));
  });

  rightVideos.forEach((video) => {
    video.addEventListener("click", () => swapVideos(video));
  });
}

function swapVideos(clickedVideo) {
  const videoContainer = document.getElementsByClassName("video-container")[0];
  const currentMainVideo = videoContainer.querySelector("video");

  const tempSource = clickedVideo.querySelector("source").getAttribute("src");
  clickedVideo
    .querySelector("source")
    .setAttribute(
      "src",
      currentMainVideo.querySelector("source").getAttribute("src")
    );
  currentMainVideo.querySelector("source").setAttribute("src", tempSource);

  clickedVideo.load();
  currentMainVideo.load();
}
