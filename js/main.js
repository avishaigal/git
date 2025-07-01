'use strict'

var gBallSize = 100

function onBallClick() {
    const elBall = document.querySelector('.ball')
    
    gBallSize >= 400 ? gBallSize = 100 : gBallSize += 50
 
    elBall.style.height = gBallSize
    elBall.style.width = gBallSize
    elBall.innerText = gBallSize
}