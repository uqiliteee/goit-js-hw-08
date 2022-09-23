import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_STORAGE_KEY = "videoplayer-current-time";

const onTimeUpdate = function (event) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(event));
};
player.on('timeupdate', throttle(onTimeUpdate, 1000));

const savingData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

if (savingData) {
    player.setCurrentTime(savingData.seconds)
        .then(function (seconds) {
    
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
            
                break;

            default:
                break;
        }
    });
}