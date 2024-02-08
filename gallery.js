import {createTweetBody} from "./dom.js"
import HttpClient from './http.js';

const tweetGallery = document.querySelector('#dynamicTweet')

const initPage = async () => {
    const tweeters = await loadTweeters()

    tweeters.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));

    tweeters.forEach((tweet) => { 
        tweetGallery.appendChild(createTweetBody(tweet))
    })
    console.log(tweeters);
}

const loadTweeters = async () => {
    const url = 'http://192.168.171.180:3001/messages';
    const http = new HttpClient(url);
    const tweeters = await http.get();
    console.log(tweeters);
    return tweeters;
}


document.addEventListener('DOMContentLoaded', initPage);