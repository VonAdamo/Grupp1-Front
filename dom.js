const createTweetBody = () => {
const div = document.createElement('div')
div.appendChild(createTweetinfo(userName, userMessage))
return div
}

const createTweetinfo = (userName, userMessage) => {
    const tweet = document.createElement('div')
    const user = document.createElement('h2')
    const tweetText = document.createElement('span')
    user.setAttribute('userName', `${userName}`)
    tweetText.setAttribute('userMessage', `${userMessage}`)
    tweet.appendChild(user)
    tweet.appendChild(tweetText)
    return tweet
}

export {createTweetBody}