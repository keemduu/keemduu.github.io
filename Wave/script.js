let a = 0.0
let position = 0.0

function setup() {
    createCanvas(500, 500)
}
 

function draw() {
    background(255)
    for(let i = 0; i < 360; i+= 360) {       
    let amp = 150
    let freq = 1
    let speed = 1
   
    x = 0
    y = height/2 + amp * Math.sin(radians(position * freq + i))
    x += i + position
    
    fill(241, 160, 9)
    noStroke()
    ellipse(x, y, 32) 
    
    position += speed 
    }
}
