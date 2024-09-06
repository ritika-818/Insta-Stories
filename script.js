const story = document.getElementsByClassName("stories-container")[0];
story.addEventListener("click", displayStory);
const videoDisplayContainer = document.getElementsByClassName(
  "video-display-container"
)[0];
const leftStories = document.getElementsByClassName("left-stories")[0];
const rightStories = document.getElementsByClassName("right-stories")[0];
const forwardArrow = document.getElementsByClassName("forward-arrow")[0];
const backwardArrow = document.getElementsByClassName("backward-arrow")[0];
const body = document.getElementsByTagName("body")[0];
let storyId = "0";

const cross = document.createElement("div");
cross.classList.add("cross-icon");
cross.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
cross.addEventListener("click", () => {
  videoDisplayContainer.style.display = "none";
  story.style.display = "flex";
  forwardArrow.style.display = "block";
  backwardArrow.style.display = "block";
  body.style.backgroundColor = "white";
});
videoDisplayContainer.appendChild(cross);

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
  forwardArrow.style.display = "none";
  backwardArrow.style.display = "none";
  storyId = parseInt(e.target.id);
  videoDisplayContainer.style.display = "flex";
  story.style.display = "none";

  videoContainer = document.getElementsByClassName("video-container")[0];
  videoContainer.innerHTML = "";
  body.style.backgroundColor = "black";

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
  video.setAttribute("width", "500");
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
  container.innerHTML="";
  const video = document.createElement("video");
  video.classList.add("video");
  video.setAttribute("height", "600");
  video.setAttribute("controls", "true");
  video.setAttribute("autoplay", "true");
  const source = document.createElement("source");
  source.setAttribute("src", videoSrc);
  source.setAttribute("type", "video/mp4");
  video.appendChild(source);

  container.appendChild(video);
}
