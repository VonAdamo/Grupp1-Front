import HttpClient from './http.js';

const form = document.querySelector('#addTweet');
const userName = document.querySelector("#userName")
const userMessage = document.querySelector("#userMessage");

const addTweet = async (e) => {
  e.preventDefault();

  const tweet = {
    userName: userName.value,
    userMessage: userMessage.value
  };

  saveTweet(tweet);
};

const saveTweet = async (tweet) => {
  const url = 'http://localhost:3000/xxx';
  const http = new HttpClient(url);
  await http.add(tweet);
  location.href = './index.html';
};

form.addEventListener('submit', addTweet);