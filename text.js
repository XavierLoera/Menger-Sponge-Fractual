
calcWave = () => {
    theta += 0.02
    let x = theta
   
    for(let i = 0; i< yvalues.length; i++) {
        yvalues[i] = cos(x) * amplitudes
        x += dx
    }
}

renderWave = () => {
noStroke()
fill(255)
var t = document.getElementById("text")
var children = t.getElementsByTagName('p')
for(let x = 0; x < children.length; x++) {
  children[x].style.fontSize = height /3 + yvalues[x] + '%'
  if(children[x].innerHTML === 'O' || children[x].innerHTML === 'K' ||children[x].innerHTML === 'N') {
    children[x].style.letterSpacing = '50px'
  }
  children[x].style.letterSpacing = spacing + '%'
  
}
}