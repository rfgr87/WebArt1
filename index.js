var interval = 2000;
var intervalId;
var intervalB = 2000;
var intervalId2;
var intervalC = 2000;
var intervalId3;
var intervalD = 2000;
var intervalId4;
var i = 0;

function changeColor(){
    let a = document.querySelector('body')
    let b = document.querySelector('.optionA')
    let c = document.querySelector('.optionA')
    let d = document.querySelector('.optionB')
    let e = document.querySelector('.optionB')
    let f = document.querySelector('.optionC')
    let g = document.querySelector('.optionC')
    let h = document.querySelector('.optionD')
    let i = document.querySelector('.optionD')
    let j = document.querySelector('.optionE')
    let k = document.querySelector('.optionE')
    let l = document.querySelector('.optionE')
    let m = document.querySelector('.optionF')
    let n = document.querySelector('.optionG')
    let o = document.querySelector('.optionH')
    let p = document.querySelector('.optionI')
    let q = document.querySelector('.optionJ')






    a.style.setProperty('--z1', Math.floor(Math.random()*255))
    a.style.setProperty('--z2', Math.floor(Math.random()*255))
    a.style.setProperty('--z3', Math.floor(Math.random()*255))
    a.style.setProperty('--z4', Math.floor(Math.random()*255))
    a.style.setProperty('--z5', Math.floor(Math.random()*255))
    a.style.setProperty('--z6', Math.floor(Math.random()*255))
    b.style.setProperty('--z7', `${Math.floor(Math.random()*150)}px`)
    c.style.setProperty('--z8', `${Math.floor(Math.random()*250)}px`)
    d.style.setProperty('--z9', `${Math.floor(Math.random()*150)}px`)
    e.style.setProperty('--z10', `${Math.floor(Math.random()*250)}px`)
    f.style.setProperty('--z11', `${Math.floor(Math.random()*150)}px`)
    g.style.setProperty('--z12', `${Math.floor(Math.random()*250)}px`)
    h.style.setProperty('--z13', `${Math.floor(Math.random()*150)}px`)
    i.style.setProperty('--z14', `${Math.floor(Math.random()*250)}px`)
    j.style.setProperty('--z15', `${Math.floor(Math.random()*150)}px`)
    k.style.setProperty('--z16', `${Math.floor(Math.random()*250)}px`)
    l.style.setProperty('--z17', `${Math.floor(Math.random()*15)}%`)
    l.style.setProperty('--z18', `${Math.floor(Math.random()*15)}%`)
    l.style.setProperty('--z19', `${Math.floor(Math.random()*100)}%`)
    l.style.setProperty('--z20', `${Math.floor(Math.random()*100)}%`)
    m.style.setProperty('--z21', `${Math.floor(Math.random()*150)}px`)
    m.style.setProperty('--z22', `${Math.floor(Math.random()*250)}px`)

    n.style.setProperty('--z23', `${Math.floor(Math.random()*150)-50}%`)
    n.style.setProperty('--z24', `${Math.floor(Math.random()*150)-50}%`)
    n.style.setProperty('--z25', `${Math.floor(Math.random()*450)}px`)
    n.style.setProperty('--z26', `${Math.floor(Math.random()*450)}px`)
    n.style.setProperty('--z27', `${Math.floor(Math.random()*450)}px`)
    n.style.setProperty('--z28', `${Math.floor(Math.random()*450)}px`)
    
    o.style.setProperty('--z29', `${Math.floor(Math.random()*150)-50}%`)
    o.style.setProperty('--z30', `${Math.floor(Math.random()*150)-50}%`)
    o.style.setProperty('--z31', `${Math.floor(Math.random()*450)}px`)
    o.style.setProperty('--z32', `${Math.floor(Math.random()*450)}px`)
    o.style.setProperty('--z33', `${Math.floor(Math.random()*450)}px`)
    o.style.setProperty('--z34', `${Math.floor(Math.random()*450)}px`)

    p.style.setProperty('--z35', `${Math.floor(Math.random()*150)-50}%`)
    p.style.setProperty('--z36', `${Math.floor(Math.random()*150)-50}%`)
    p.style.setProperty('--z37', `${Math.floor(Math.random()*450)}px`)
    p.style.setProperty('--z38', `${Math.floor(Math.random()*450)}px`)
    p.style.setProperty('--z39', `${Math.floor(Math.random()*450)}px`)
    p.style.setProperty('--z40', `${Math.floor(Math.random()*450)}px`)

    q.style.setProperty('--z41', `${Math.floor(Math.random()*150)}px`)
    q.style.setProperty('--z42', `${Math.floor(Math.random()*250)}px`)
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

const lettersAndSymbols = 
["`","~", "1", "!", "@", 
"2", "3", "#", "$", "4", 
"%", "5", "6", "^", "7",
"&", "*", "8", "(", "9",
")","0", "-", "_", "+", 
"=", "q", "Q", "w", "W", 
"e", "E", "r", "R", "t",
"T", "y", "Y", "u", "U",
"i", "I", "o", "O", "p",
"P", "[", "{", "]", "}",
"|", "a", "A", "s", "S",
"d", "D", "f", "F", "g",
"G", "h", "H", "j", "J",
"k", "K", "l", "L", ";",
":", "'", "z", "Z", "x", 
"X", "c", "C", "v", "V",
"b", "B", "n", "N", "m",
"M", "<", ",", ">", ".",
"/", "?"]

//92

function randomLetters1(){
  let letter = lettersAndSymbols[Math.floor(Math.random()*92)]
  let random = Math.floor(Math.random()*5);
  let allLetters = []
  for(let i = 0; i < random; i += 1){
    allLetters.push(lettersAndSymbols[Math.floor(Math.random()*92)]);
  }
  return allLetters.join("")
  //lettersAndSymbols[Math.floor(Math.random()*92)]
}


function removeAll(){
  var node = document.querySelector('.optionG');
  node.querySelectorAll('*').forEach(n => n.remove());
}

function appendLetter(){
  var node = document.createElement("a");                 // Create a <li> node
  var textnode = document.createTextNode(randomLetters1());         // Create a text node
  node.appendChild(textnode);
  var node1 = document.createElement("br");
  node.appendChild(node1)
  document.querySelector(".optionG").appendChild(node);

}


function random(){
  let rand = Math.floor(Math.random()*4-3);
  i = rand;
  return rand
}

// setInterval("random()", 10);

function alternateFunctions(){
 
  if(random() < 0){appendLetter()} else {removeAll()};
  // if(ramp() < 1){ramp()} else if(i > 0) {ramp()} else { ramp()};

}


function intervalLetters(_intervalB) {
  // Store the id of the interval so we can clear it later
  intervalId2 = setInterval("alternateFunctions()", _intervalB);
}

function interval3(){setInterval( function() {
  intervalB =  Math.floor(Math.random()*100);
  // clear the existing interval
  clearInterval(intervalId2);
  // just start a new one
  intervalLetters(intervalB);
  console.log(intervalB)
}, 1000)}



function removeAll2(){
  var node = document.querySelector('.optionH');
  node.querySelectorAll('*').forEach(n => n.remove());
}

function appendLetter2(){
  var node = document.createElement("a");                 // Create a <li> node
  var textnode = document.createTextNode(randomLetters1());         // Create a text node
  node.appendChild(textnode);
  var node1 = document.createElement("br");
  node.appendChild(node1)
  document.querySelector(".optionH").appendChild(node);

}


function random2(){
  let rand = Math.floor(Math.random()*4-3);
  i = rand;
  return rand
}

setInterval("random2()", 10);

function alternateFunctions2(){
 
  if(random2() < 0){appendLetter2()} else {removeAll2()};
  // if(ramp() < 1){ramp()} else if(i > 0) {ramp()} else { ramp()};

}


function intervalLetters2(_intervalC) {
  // Store the id of the interval so we can clear it later
  intervalId3 = setInterval("alternateFunctions2()", _intervalC);
}

function interval4(){setInterval( function() {
  intervalC =  Math.floor(Math.random()*100);
  // clear the existing interval
  clearInterval(intervalId3);
  // just start a new one
  intervalLetters2(intervalC);
  console.log(intervalC)
}, 1000)}










function removeAll3(){
  var node = document.querySelector('.optionI');
  node.querySelectorAll('*').forEach(n => n.remove());
}

function appendLetter3(){
  var node = document.createElement("a");                 // Create a <li> node
  var textnode = document.createTextNode(randomLetters1());         // Create a text node
  node.appendChild(textnode);
  var node1 = document.createElement("br");
  node.appendChild(node1)
  document.querySelector(".optionI").appendChild(node);

}


function random3(){
  let rand = Math.floor(Math.random()*4-3);
  i = rand;
  return rand
}

setInterval("random3()", 10);

function alternateFunctions3(){
 
  if(random3() < 0){appendLetter3()} else {removeAll3()};
  // if(ramp() < 1){ramp()} else if(i > 0) {ramp()} else { ramp()};

}


function intervalLetters3(_intervalD) {
  // Store the id of the interval so we can clear it later
  intervalId4 = setInterval("alternateFunctions3()", _intervalD);
}

function interval5(){setInterval( function() {
  intervalD =  Math.floor(Math.random()*100);
  // clear the existing interval
  clearInterval(intervalId4);
  // just start a new one
  intervalLetters2(intervalD);
  console.log(intervalD)
}, 1000)}


// Hacer una funcion que llene la pendeja de muchas letras y simbolos pa arriba y pa abajo