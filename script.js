const displaycolor = document.querySelector("div")
const buttonteal = document.getElementById("teal")
const aqua = document.getElementById('aqua')
const pink = document.getElementById('pink')
const purp = document.getElementById('purple')
const colorless = document.getElementById('colorless')
const hider = document.getElementById('hider')

buttonteal.onclick = function() {
   displaycolor.style.backgroundColor = 'teal';
    displaycolor.innerHTML= 'teal'
}

aqua.onclick = function() {
   displaycolor.style.backgroundColor = 'aqua';
   displaycolor.innerHTML= 'aqua'
}

pink.onclick = function() {
   displaycolor.style.backgroundColor = 'pink';
   displaycolor.innerHTML= 'pink'
}

purp.onclick = function() {
   displaycolor.style.backgroundColor = 'purple';
   displaycolor.innerHTML= 'purple'
}

colorless.onclick = function() {
   displaycolor.style.backgroundColor = 'white';
   displaycolor.innerHTML= 'colorless'
}


hider.onclick = function() {
   if(hider.innerHTML=='hide'){
    displaycolor.style.display='none'
    hider.innerHTML='show'
   } 
   else if(hider.innerHTML=='show') {
    displaycolor.style.display= ''
    hider.innerHTML='hide'
   }
}