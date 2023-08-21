import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const KEY = 'videoplayer-current-time';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (iframe) {
    console.log('played the video!');
    console.log(iframe.seconds);
    localStorage.setItem(KEY, JSON.stringify(iframe));
  }),
  4000
);

const currentTime = localStorage.getItem(KEY);
if (currentTime) {
  const seconds = JSON.parse(currentTime).seconds;
  player.setCurrentTime(seconds);
}
