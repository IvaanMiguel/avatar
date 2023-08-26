const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function drawBezierCurve(initX, initY, width, offsetX, offsetY) {
  ctx.bezierCurveTo(
    initX + offsetX,
    initY + offsetY,
    initX + width - offsetX,
    initY + offsetY,
    initX + width,
    initY)
}

function drawEye(x, y) {
  ctx.beginPath()
  ctx.ellipse(x, y, eyesWidth, eyesHeight, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#3a99d1'
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(x, y, eyesWidth - 5, eyesHeight - 5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#9fe6ed'
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(x, y, eyesWidth - 15, eyesHeight - 15, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#f8fee7'
  ctx.fill()
}


const initX = 50
const initY = 350
const slimeWidth = 600
const eyesWidth = 35
const eyesHeight = 70

ctx.fillStyle = '#25c5df'
ctx.fillRect(0, 0, 700, 700)

ctx.strokeStyle = 'rgb(225, 191, 146)'

ctx.moveTo(0, 200)
drawBezierCurve(-150, 200, 1000, 0, -100)
ctx.stroke()

ctx.fillStyle = 'rgb(246, 215, 176)'

ctx.fillRect(0, 200, 700, 700)
ctx.fill()

ctx.beginPath()
ctx.ellipse(400, 350, 340, 150, 0, 0, 2 * Math.PI)

ctx.fillStyle = 'rgba(68, 68, 68, .5)'
ctx.fill()

ctx.beginPath()
ctx.moveTo(initX, initY)
drawBezierCurve(initX, initY, slimeWidth, 0, -400)

ctx.moveTo(initX, initY)
drawBezierCurve(initX, initY, slimeWidth, 0, 200)

const grd = ctx.createLinearGradient(350, 0, 350, 700);
grd.addColorStop(.4, '#3bb7b4');
grd.addColorStop(.5, '#98d5df');

ctx.fillStyle = grd;

ctx.fill()

drawEye(350 - eyesWidth - 50, 270)
drawEye(350 + eyesWidth + 50, 270)

ctx.beginPath()
ctx.fillStyle = '#e5fff7'

ctx.ellipse(200, 150, 30, 45, .8, 0, 2 * Math.PI)
ctx.fill()

ctx.beginPath()
ctx.ellipse(160, 190, 10, 15, 1, 0, 2 * Math.PI)
ctx.fill()
