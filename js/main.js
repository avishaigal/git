'use strict'

var gBallSize = 100

function onBallClick(currBall) {
    const elBall = document.querySelector(`.ball${currBall}`)
    const randSize = getRandomInt(20, 60)
    const elBallColor = getRandomColor()
    const maxDiameter = gBallSize + randSize

    maxDiameter >= 400 ? gBallSize = 100 : gBallSize += randSize

    elBall.style.height = gBallSize
    elBall.style.width = gBallSize
    elBall.innerText = gBallSize
    elBall.style.backgroundColor = elBallColor
}