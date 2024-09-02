const story = document.getElementsByClassName("stories-container")[0];
story.addEventListener('click', displayStory);
const videoDisplayContainer = document.getElementsByClassName("video-display-container")[0];
const leftStories = document.getElementsByClassName("left-stories")[0];
const rightStories = document.getElementsByClassName("right-stories")[0];

function displayStory(e) {
    const storyId = e.target.id;
    console.log(storyId);
    videoDisplayContainer.style.display = "flex";
    story.style.display = "none";

    const videoContainer = document.getElementsByClassName('video-container')[0];
    videoContainer.innerHTML = '';

    const video = document.createElement('video');
    video.classList.add('video');
    video.setAttribute('height', '600');
    video.setAttribute('controls', 'true');

    const source = document.createElement('source');
    source.setAttribute('src', 'https://cdn.pixabay.com/video/2020/01/16/31301-385265740_tiny.mp4');
    source.setAttribute('type', 'video/mp4');
    video.appendChild(source);

    videoContainer.appendChild(video);

    const leftVideos = leftStories.querySelectorAll('video');
    const rightVideos = rightStories.querySelectorAll('video');

    leftVideos.forEach(video => {
        video.addEventListener('click', () => swapVideos(video));
    });

    rightVideos.forEach(video => {
        video.addEventListener('click', () => swapVideos(video));
    });
}

function swapVideos(clickedVideo) {
    const videoContainer = document.getElementsByClassName('video-container')[0];
    const currentMainVideo = videoContainer.querySelector('video');

    const tempSource = clickedVideo.querySelector('source').getAttribute('src');
    clickedVideo.querySelector('source').setAttribute('src', currentMainVideo.querySelector('source').getAttribute('src'));
    currentMainVideo.querySelector('source').setAttribute('src', tempSource);

    clickedVideo.load();
    currentMainVideo.load();
}
