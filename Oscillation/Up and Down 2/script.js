let a = 0.0

function setup() {
    createCanvas(500, 500)
}
 

function draw() {
    background(255)
    for(let i = 0; i < 360; i+= 30) {       
    let amp = 150
    let freq = 1
    let speed = 0.01
   
    x = 0
    y = height/2 + amp * Math.sin(radians(i * freq) + a)
      
    fill(241, 160, 9)
    noStroke()
    ellipse(x += i, y, 32)
    a += speed 
    
    }
}
