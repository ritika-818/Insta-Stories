const story = document.getElementsByClassName("stories-container")[0];
story.addEventListener("click", displayStory);
const videoDisplayContainer = document.getElementsByClassName("video-display-container")[0];
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
  storyId = parseInt(e.target.id); 
  videoDisplayContainer.style.display = "flex";
  story.style.display = "none"; 

  const videoContainer = document.getElementsByClassName("video-container")[0];
  videoContainer.innerHTML = "";

  videoDisplayContainer.style.background = "black";

  createVideo(arr[storyId], videoContainer);

  setupSideVideos();
}

function setupSideVideos() {
  leftStories.innerHTML = ""; 
  rightStories.innerHTML = ""; 

  for (let i = storyId - 1; i >= 0; i--) {
    const videoElement = createSideVideo(arr[i]);
    leftStories.appendChild(videoElement);

    videoElement.addEventListener("click", () => showVideo(i));
  }

  for (let i = storyId + 1; i < arr.length; i++) {
    const videoElement = createSideVideo(arr[i]);
    rightStories.appendChild(videoElement);

    videoElement.addEventListener("click", () => showVideo(i));
  }
}

function createSideVideo(videoSrc) {
  const video = document.createElement("video");
  video.classList.add("side-video");
  video.setAttribute("height", "100");
  video.setAttribute("muted", "true"); 
  video.setAttribute("autoplay", "true");
  video.setAttribute("loop", "true");

  const source = document.createElement("source");
  source.setAttribute("src", videoSrc);
  source.setAttribute("type", "video/mp4");
  video.appendChild(source);

  return video;
}

function showVideo(newStoryId) {
  if (newStoryId >= 0 && newStoryId < arr.length) {
    storyId = newStoryId;
    const videoContainer = document.getElementsByClassName("video-container")[0];
    videoContainer.innerHTML = "";
    createVideo(arr[storyId], videoContainer);

    setupSideVideos();
  }
}

function createVideo(videoSrc, container) {
  const video = document.createElement("video");
  video.classList.add("video");
  video.setAttribute("height", "600");
  video.setAttribute("controls", "true");

  const source = document.createElement("source");
  source.setAttribute("src", videoSrc);
  source.setAttribute("type", "video/mp4");
  video.appendChild(source);

  const cross = document.createElement("div");
  cross.classList.add("cross-icon");

  container.appendChild(cross);
  container.appendChild(video);
}
