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
    elBall1.style.width = elBall2.style.height

    elBall2.style.backgroundColor = tempBallBackgroundColorHolder
    elBall2.style.height = tempBallSizeHolder
    elBall2.style.width = tempBallSizeHolder
}

function onReduceBallsSize() {
    for (var i = 1; i <= 2; i++) {
        const elBall = document.querySelector(`.ball${i}`)
        const randSize = getRandomInt(20, 60)
        const minDiameter = gBallSize - randSize
        
        minDiameter <= 100 ? gBallSize = 100 : gBallSize -= randSize
        elBall.style.height = gBallSize
        elBall.style.width = gBallSize
        elBall.innerText = gBallSize
    }
}

function onChangeBackgroundColor() {
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}