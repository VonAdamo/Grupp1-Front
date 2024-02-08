const createTweetBody = (tweet) => {
    const post = document.createElement('div')
    post.classList.add('post')

    const avatar = document.createElement('div')
    avatar.classList.add('post__avatar')

    const avatarImg = document.createElement('img')
    avatarImg.setAttribute('src', '/images/elon.jpg') // Fixed image
    avatarImg.setAttribute('alt', 'Profile Picture')
    avatar.appendChild(avatarImg)

    const body = document.createElement('div')
    body.classList.add('post__body')

    const header = document.createElement('div')
    header.classList.add('post__header')

    const headerText = document.createElement('div')
    headerText.classList.add('post__headerText')

    const h3 = document.createElement('h3')
    h3.textContent = tweet.userName

    const headerSpecial = document.createElement('span')
    headerSpecial.classList.add('post__headerSpecial')

    const verifiedIcon = document.createElement('span')
    verifiedIcon.classList.add('material-icons', 'post__badge')
    verifiedIcon.textContent = 'verified'

    const userNameSpan = document.createElement('span')
    userNameSpan.textContent = `@${tweet.userName}`

    headerSpecial.appendChild(verifiedIcon)
    headerSpecial.appendChild(userNameSpan)
    h3.appendChild(headerSpecial)
    headerText.appendChild(h3)

    const headerDescription = document.createElement('div')
    headerDescription.classList.add('post__headerDescription')

    const p = document.createElement('p')
    p.textContent = tweet.userMessage
    headerDescription.appendChild(p)

    header.appendChild(headerText)
    header.appendChild(headerDescription)

    const footer = document.createElement('div')
    footer.classList.add('post__footer')

    const repeatIcon = document.createElement('span')
    repeatIcon.classList.add('material-icons')
    repeatIcon.textContent = 'repeat'

    const favoriteIcon = document.createElement('span')
    favoriteIcon.classList.add('material-icons')
    favoriteIcon.textContent = 'favorite_border'

    footer.appendChild(repeatIcon)
    footer.appendChild(favoriteIcon)

    body.appendChild(header)
    body.appendChild(footer)

    post.appendChild(avatar)
    post.appendChild(body)

    return post
}

export { createTweetBody }
