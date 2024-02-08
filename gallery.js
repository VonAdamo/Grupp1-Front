import {createTweetBody} from "./dom.js"

const tweetGallery = document.querySelector('#dynamicTweet')

const initPage = async () => {
    const tweeters = await loadTweeters()
    
    tweeters.forEach((tweeters) => {
        tweetGallery.appendChild(createTweetBody(tweeters))
    })
    
    tweeters.appendchild(tweetGallery)
}

const loadTweeters = async () => {
    const url = 'http://localhost:3000/tweeters';
    const http = new HttpClient(url);
    const tweeters = await http.get();
    return tweeters;
}

document.addEventListener('DOMContentLoaded', initPage);