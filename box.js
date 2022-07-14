class Box {
    constructor(x,y,z,r) {
        this.pos = createVector(x,y,z)
        this.r = r;
    }
    generate = () => {
        var boxes = []
        for(var x = -1; x < 2; x++) { //if 0 is the center we wanna go -1 | 0 | 1
            for(var y = -1; y < 2; y++) {
                for(var z = -1; z < 2; z++) {
                    var sum = abs(x) + abs(z) + abs(y)
                    if(sum > 1) {
                        var newR = this.r/3
                        var b = new Box(this.pos.x+x*newR,this.pos.y+y*newR,this.pos.z+z*newR,newR)
                        boxes.push(b)
                    }
                }
            }
        }
        return boxes
    }
    show = () => {
        push()
        translate(this.pos.x,this.pos.y,this.pos.z)
        fill(255)
        box(this.r)
        pop()
    }
}
