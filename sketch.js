var angle = 0;
var sponge = []

var period = 500.0
var spacing = 12.0
var amplitudes = 75.0
var theta = 0.0
var sentence = "Press to divide the cube"
let sentenceArray 
let dx
let yvalues

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL)
  var b = new Box(0,0,0,200)
  sponge.push(b)
  console.log(b)
  dx = (TWO_PI/ period) * spacing
  yvalues = new Array(floor(width / spacing))
  sentenceArray = sentence.split("")
  console.log(sentenceArray)
}

windowResized = () => {
  resizeCanvas(windowWidth,windowHeight)
}
function mousePressed() {
  console.log("pressed")
  var next = []
  if(sponge.length <= 20) {
    for(var i = 0; i < sponge.length; i++) {
      var b = sponge[i]
      var newBoxes = b.generate();
      next = next.concat(newBoxes);
    }
    sponge = next;
  }
  else {
    sponge = []
    var b = new Box(0,0,0,200)
    sponge.push(b)
  }
}

function draw() {
   calcWave()
   renderWave()
 
  background(51)
  stroke(255)
  noFill()
  lights()
  rotateX(angle)
  rotateY(angle * 0.3)
  //box(200)
  for(let i = 0; i< sponge.length; i++) {
sponge[i].show()
  }
 
  angle += 0.01;
  //console.log(angle)
}
