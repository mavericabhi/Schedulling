let i = 0;
let start;
let schd = document.getElementById('schd');
let blueBlock = document.getElementById('blueBlock');
let schdValue;
let leftOffset;

function schedulingMethod() {
  if(schdValue == 0)
  	requestAnimationFrame(fib);
  else if(schdValue == 1)
  	setTimeout( () => fib());
  else if(schdValue == 2)
  	Promise.resolve().then( () => fib());
  else if(schdValue == 3)
  	queueMicrotask( () => fib());
}

 function fib() {
  do {
    i++;
  } while (i % 1e6 != 0)

  if (i === 1e8) {
    console.log(`completed in ${(Date.now() - start)/1000} seconds`);
    console.log(i);
  } 
  else {
    leftOffset = blueBlock.style.left;
    leftOffset = parseInt(leftOffset.slice(0,-2)) + 5;
    
    blueBlock.style.left = `${leftOffset}px`;
    schedulingMethod();
  }
} 

function init() {
	i = 0;
  start = Date.now();
	schdValue = schd.value;
	blueBlock.style.left = `10px`;
  console.log(blueBlock.style.left);
  
  setTimeout(fib ,400)
}
