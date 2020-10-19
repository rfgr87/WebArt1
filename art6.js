var interval = 2000;
var intervalId;
// var header = document.querySelector('body');


function changeImage(){
  let a = document.querySelector('body')
    
  a.style.setProperty('--z1', randomImages())
  console.log(randomImages()) 
}


// store in a function so we can call it again
function interval1(_interval) {
  // Store the id of the interval so we can clear it later
  intervalId = setInterval("changeImage()", _interval);
}


function interval2(){setInterval( function() {
  interval =  Math.floor(Math.random()*100);
  // clear the existing interval
  clearInterval(intervalId);
  // just start a new one
  interval1(interval);
  console.log(interval)
}, 1000)}

const imageFiles = 
['url("/photos/facebook_1538365236929.jpg")', 'url("/photos/facebook_1538366294095.jpg")',

'url("/photos/facebook_1538366334606.jpg",)', 'url("/photos/facebook_1538366370954.jpg"]',
'url("/photos/facebook_1538366416749.jpg")', 'url("/photos/foto1.jpg")', 
'url("/photos/foto2.jpg")', 'url("/photos/foto3.jpg")',
'url("/photos/foto4.jpg")', 'url("/photos/foto5.jpg")',
'url("/photos/foto6.jpg")', 'url("/photos/foto7.jpg")', 
'url("/photos/foto8.jpg")', 'url("/photos/foto9.jpg")', 
'url("/photos/foto10.jpg")', 'url("/photos/foto11.jpg")']

//92

function randomImages(){
  let letter = imageFiles[Math.floor(Math.random()*16)]
  return letter
 }




