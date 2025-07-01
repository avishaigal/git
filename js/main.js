'use strict'

var gBallSize = 100

function onBallClick() {
    const elBall = document.querySelector('.ball')
    const randSize = getRandomInt(20, 60)

    gBallSize + randSize >= 400 ? gBallSize = 100 : gBallSize += randSize

    elBall.style.height = gBallSize
    elBall.style.width = gBallSize
    elBall.innerText = gBallSize
}