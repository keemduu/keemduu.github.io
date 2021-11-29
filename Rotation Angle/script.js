function setup() {
    createCanvas(500, 500)
}
 

function draw() {
    background(255)
    let x = width/2
    let y = height/2
    let a = Math.atan2(mouseX-x, mouseY-y)       
    translate(x, y)
    rotate(a)
    noStroke()
    fill(241, 106, 9)
    rect(0, 0, 50, 50, 3)
    
}
