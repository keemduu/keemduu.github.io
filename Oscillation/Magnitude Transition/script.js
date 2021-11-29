let a = 0.0

function setup() {
    createCanvas(500, 500)
}
 

function draw() {
    background(255)
         
    let amp = 150
    let speed = 0.01
    let freq = 0.01
    
    let r =  amp * Math.sin(freq + a)
      
    fill(241, 160, 9)
    noStroke()
    ellipse(width/2, height/2, r)
    a += speed 

}
