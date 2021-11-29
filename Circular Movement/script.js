let a = 0.0

function setup() {
    createCanvas(500, 500) 
}
 

function draw() {
    background(255)
    for(let i = 0; i < 360; i+= 30) {       
    let amp = 150
    let speed = 0.001
   
    y = width/2 + amp * Math.sin(radians(i) + a)
    x = height/2 + amp * Math.cos(radians(i) + a)
        
    fill(241, 160, 9)
        noStroke()
        ellipse(x, y, 32)
        a += speed
    }
}
