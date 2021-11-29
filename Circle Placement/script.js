function setup() {
    createCanvas(500, 500)
}
 

function draw() {
    for(let i = 0; i < 360; i+= 30) {       
    let amp = 150
    y = width/2 + amp * Math.sin(radians(i))
    x = height/2 + amp * Math.cos(radians(i))
        fill(241, 160, 9)
        noStroke()
        ellipse(x, y, 32)
    }
}
