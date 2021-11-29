function setup() {
    createCanvas(500, 500)
}
 

function draw() {
    for(let i = 0; i < width; i += 3) {
        for(let j = 0; j < height; j += 3) {

        let freq = 20

        this.y1 = Math.sin(i/freq)
        this.x = map(this.y1, -1, 1, 255, 200)
        this.y = map(this.y1, -1, 1, 255, 200)
        fill(this.x, this.y, 245)
        noStroke()
        rect(i, j, 10, 10, 5)
      }
    }
}
