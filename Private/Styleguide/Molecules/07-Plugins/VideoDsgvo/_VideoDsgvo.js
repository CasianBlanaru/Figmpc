window.sitepackage = window.zi || {};
window.sitepackage.dsgvo = window.sitepackage.dsgvo || {};
window.sitepackage.dsgvo.youtube = window.sitepackage.dsgvo.youtube || {};

function videoDsgvoInit() {
  const youTubeElements = document.querySelectorAll(".dsgvo-youtube") || [];

  if (youTubeElements.length) {
    youTubeElements.forEach(function (mediaObject) {
      mediaObject
        .querySelector(".online-media-icon")
        .addEventListener("click", () => youTubePlay(mediaObject, 1));
    });
  }

  if (document.querySelector("body").classList.contains("allowYoutube")) {
    allow();
  }
}

function allow() {
  const youTubeElements = document.querySelectorAll(".dsgvo-youtube") || [];

  if (youTubeElements.length) {
    youTubeElements.forEach(function (mediaObject) {
      youTubePlay(mediaObject);
    });
  }
}

window.sitepackage.dsgvo.youtube.allow = allow;

function youTubePlay(mediaObject, autostart = 0) {
  const videoId = mediaObject.dataset.videoid;
  const onlineMedia_notice = mediaObject.querySelector(".online-media-notice");

  let onlineMedia_icon = mediaObject.querySelector(".online-media-icon");

  onlineMedia_notice.remove();
  onlineMedia_icon.remove();

  let onlineMedia_overlay = mediaObject.querySelector(".online-media-overlay");

  let onlineMedia_overlay_content = mediaObject.innerHTML;

  // https://developers.google.com/youtube/player_parameters
  onlineMedia_overlay.innerHTML =
    onlineMedia_overlay_content +
    '<iframe src="https://www.youtube-nocookie.com/embed/' +
    videoId +
    "?autoplay=" +
    autostart +
    '&playsinline=1" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media;" allowfullscreen></iframe>';
}
export default {};

export const VideoDsgvoInit = videoDsgvoInit;
