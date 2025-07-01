'use strict'

var gBallSize = 100

function onBallClick(elBall) {
    const randSize = getRandomInt(20, 60)
    const elBallColor = getRandomColor()
    const maxDiameter = gBallSize + randSize

    maxDiameter >= 400 ? gBallSize = 100 : gBallSize += randSize

    elBall.style.height = gBallSize
    elBall.style.width = gBallSize
    elBall.innerText = gBallSize
    elBall.style.backgroundColor = elBallColor
}

function onSwitchAttributes() {
const elBall1 = document.querySelector('.ball1')
const elBall2 = document.querySelector('.ball2')
const tempBallBackgroundColorHolder = elBall1.style.backgroundColor
const tempBallSizeHolder = elBall1.style.height

elBall1.style.backgroundColor = elBall2.style.backgroundColor
elBall1.style.height = elBall2.style.height

elBall2.style.backgroundColor = tempBallBackgroundColorHolder
elBall2.style.height = tempBallSizeHolder
}
