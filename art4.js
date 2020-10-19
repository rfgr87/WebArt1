// document.querySelector('body').onmousemove = (e) => {
//       e.target.style.setProperty('--x', `${e.pageX}px`)
//       e.target.style.setProperty('--y', `${e.pageY}px`)
//       e.target.style.setProperty('--z1', `${(Math.floor(Math.random()*255))}`)
//       e.target.style.setProperty('--z2', `${(Math.floor(Math.random()*255))}`)
//       e.target.style.setProperty('--z3', `${(Math.floor(Math.random()*255))}`)
//     }

var interval = 2000;
var intervalId;

function changeColor(){
    let a = document.querySelector('body')
    let b = document.querySelector('.option1')
    let c = document.querySelector('.option2')
    let d = document.querySelector('.option3')
    let e = document.querySelector('.option4')
    let f = document.querySelector('.option5')
    let g = document.querySelector('.option1')

    a.style.setProperty('--z1', Math.floor(Math.random()*255))
    a.style.setProperty('--z2', Math.floor(Math.random()*255))
    a.style.setProperty('--z3', Math.floor(Math.random()*255))
    a.style.setProperty('--z4', Math.floor(Math.random()*255))
    a.style.setProperty('--z5', Math.floor(Math.random()*255))
    a.style.setProperty('--z6', Math.floor(Math.random()*255))
    b.style.setProperty('--z7', `${Math.floor(Math.random()*150)}px`)
    c.style.setProperty('--z8', `${Math.floor(Math.random()*150)}px`)
    d.style.setProperty('--z9', `${Math.floor(Math.random()*150)}px`)
    e.style.setProperty('--z10', `${Math.floor(Math.random()*150)}px`)
    f.style.setProperty('--z11', `${Math.floor(Math.random()*150)}px`)
    g.style.setProperty('--z12', `${Math.random()*20.0}vw`)
}



// function interval2(){  setInterval("randomOne()", 1000)}
// function interval(){setInterval("changeColor()", "interval2()")}



// store in a function so we can call it again
function interval1(_interval) {
  // Store the id of the interval so we can clear it later
  intervalId = setInterval("changeColor()", _interval);
}


function getInterval() {
  return interval;
}


function interval2(){setInterval( function() {
  interval =  Math.floor(Math.random()*100);
  // clear the existing interval
  clearInterval(intervalId);
  // just start a new one
  interval1(interval);
  console.log(interval)
}, 1000)}
