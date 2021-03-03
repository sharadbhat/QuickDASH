const manifestUri =
    'http://localhost:8000/sample-manifest-full.mpd'

function initApp() {
  shaka.polyfill.installAll();

  if (shaka.Player.isBrowserSupported()) {
    initPlayer();
  } else {
    console.error('Browser not supported!');
  }
}

async function initPlayer() {
  const video = document.getElementById('video');
  const player = new shaka.Player(video);

  window.player = player;

  player.addEventListener('error', onErrorEvent);

  try {
    await player.load(manifestUri);
    console.log('The video has now been loaded!');
  } catch (e) {
    onError(e);
  }
}

function onErrorEvent(event) {
  onError(event.detail);
}

function onError(error) {
  console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);