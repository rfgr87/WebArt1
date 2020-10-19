function setup() {
  createCanvas(500, 500);
  // noStroke();
  // frameRate(30);
}


function draw() {
  // loop();
  background('blue')
 // setInterval(drawCircle(random(15) - 10, random(15)-10, random(15)-10, 0), 1000);
  drawCircle(random(15) - 10, random(15)-10, random(15)-10, 0)
  //drawCircle(0.5,  0);
}

function mouseReleased() {
  loop();
}

// function mousePressed() { 
//   noLoop(); 
// } 
  
// function mouseReleased() { 
   
// } 


function drawCircle(x1, x2, x5, level) {
  r = random(255); // r is a random number between 0 - 255
  g = random(255); // g is a random number betwen 100 - 200
  b = random(255); // b is a random number between 0 - 100
  a = random(255); // a is a random number between 200 - 255
  
  fill(r, g, b, 250);
  let x3 = map(x1, -15, 4.0, 0.0, 1.0);
  let x4 = map(x2, -15, 4.0, 0.0, 1.0);
  let x6 = map(x5, -15, 4.0, 0.0, 1.0);
  circle(x3*425+50, x4*425 + 50, 15*x6+5);
  if (level < 100000) {
    level = level + 1;
    x1 = 2.3 + (x1 *0.24) * (x1 *(-0.86));
    x2 = 2.3 + (x2 *0.24) * (x2 *(-0.86));
    x5 = 2.3 + (x5 *0.24) * (x5 *(-0.86));
    drawCircle(x1, x2, x5,  level);
  }
}

// let handleMousemove = () => {
//   window.location.reload("Refresh");
// };

// document.addEventListener('mousemove', handleMousemove);

  // function refresh(){
  //         window.location.reload("Refresh")
  //     }


