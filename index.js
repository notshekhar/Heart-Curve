let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let ox = canvas.width/2 
let oy = canvas.height/2
let x1, y1, x2, y2
let t = 0
let lastX1, lastY1, lastX2, lastY2
let r = 10
let f = -1

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

let tempX = r * (16 * Math.pow(Math.sin(t), 3)) + ox
let tempY = -r * ((13 * Math.cos(t)) - (5 * Math.cos(2 * t)) - (2 * Math.cos(3 * t)) - Math.cos(4 * t)) + oy


function draw(){
  // one side
  x1 = r * (16 * Math.pow(Math.sin(t), 3)) + ox
  y1 = -r * ((13 * Math.cos(t)) - (5 * Math.cos(2 * t)) - (2 * Math.cos(3 * t)) - Math.cos(4 * t)) + oy
  ctx.beginPath()
  ctx.strokeStyle = "red"
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.fillStyle = "white"
  ctx.moveTo(lastX1, lastY1)
  ctx.lineTo(x1, y1)
  ctx.stroke()
  //another side
  // x2 = f * r * (16 * Math.pow(Math.sin(t), 2)) + ox
  // y2 = -r * ((13 * Math.cos(t)) - (5 * Math.cos(2 * t)) - (2 * Math.cos(3 * t)) - Math.cos(4 * t)) + oy
  // ctx.beginPath()
  // ctx.strokeStyle = "red"
  // ctx.lineJoin = 'round'
  // ctx.lineCap = 'round'
  // ctx.fillStyle = "white"
  // ctx.moveTo(x1, y1)
  // ctx.lineTo(x2, y2)
  // ctx.stroke()
  
  lastX1 = x1
  lastY1 = y1
  lastX2 = x2
  lastY2 = y2
  t += 0.01
}
let interval = setInterval(()=>draw(), 21)