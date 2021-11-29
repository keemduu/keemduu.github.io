let a = 0.0
let b = 0.0

function setup() {
    createCanvas(500, 500)
}
 

function draw() {
    background(255)
    for(let i = 0; i < 360; i+= 30) {       
    let amp = 150
    let xspeed = 0.0011
    let yspeed = 0.007
    
    y = width/2 + amp * Math.sin(a)
    x = height/2 + amp * Math.cos(b)
    
    a += xspeed
    b += yspeed

    fill(241, 160, 9)
    noStroke()
    ellipse(this.x, this.y, 50)    
    }
}
