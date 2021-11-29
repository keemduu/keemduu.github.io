let particles = []
let particlesc = 0
let maxparticles = 50
let off=454353
let t=0
let s=80
let w=30
let particlespeed=5
let step=0.01

function setup() {
    createCanvas(500, 500)
    frameRate(30)
}
 

function draw() {
    background(255)
    for(var i=0; i < height/w; i++){
        for(var j=0; j <= width/w; j++){
            var x = (j*w)
            var y = (i*w)
            var v = [cos(map(noise(x/s,y/s),0,1,0,TWO_PI)),sin(map(noise(x/s,y/s),0,1,0,TWO_PI))]
            stroke(39, 109, 254)
            strokeWeight(3)
            line(x, y, x + v[0] * 15,y + v[1] * 15);

      } 
    }
  
  for(var i=0;i<particlesc;++i){
      particles[i].update()
      particles[i].show()
  }

  if(particlesc<maxparticles && frameCount%10==0)
  particles[particlesc++] = new particle(mouseX,mouseY)
}

function particle(x, y) {
    this.x = x
    this.y = y
    this.v = [-1,0]
    this.a = [0,0]
    
    this.show = function () {
        noStroke()
        fill(241, 160, 9)
        ellipse(this.x,this.y,10,10)
        var n=[+this.v[1]*5,+this.v[0]*5]
       
    }
    
    this.update = function(){
        this.v=[cos(noise(this.x/s,this.y/s)*TWO_PI),sin(noise(this.x/s,this.y/s)*TWO_PI)]
        this.x += this.v[0]*particlespeed
        this.y += this.v[1]*particlespeed
        
        if(this.x<-10){
            this.x= mouseX
            this.y= mouseY
        }
    }
  }
  
  