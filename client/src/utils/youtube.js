import axios from 'axios';
const KEY = 'AIzaSyB-DahPGPq_4IzHr3MQvIyauRvX2ml98Rw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 8,
        key: KEY
    }
})