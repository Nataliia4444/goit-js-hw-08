import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const KEY = 'videoplayer-current-time';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (iframe) {
    console.log('played the video!');
    console.log(iframe);
    localStorage.setItem(KEY, JSON.stringify(iframe));
  }),
  20000
);
const currentTime = localStorage.getItem(KEY);
const seconds = JSON.parse(currentTime).seconds;
console.log(seconds);
player.setCurrentTime(seconds);
