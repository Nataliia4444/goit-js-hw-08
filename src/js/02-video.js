import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const KEY = 'videoplayer-current-time';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onplay, 2000));

function onplay(data) {
  localStorage.setItem(KEY, data.seconds);
}
const currentTime = localStorage.getItem(KEY);
if (currentTime) {
  const seconds = JSON.parse(currentTime);
  player.setCurrentTime(seconds);
}
