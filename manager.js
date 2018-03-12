window.onload = function() {
  var worker = new Worker("worker.js");
  
  worker.postMessage("ping");
}

// var worker = new Worker("worker.js");
// var worker2 = new Worker("worker.js");
// var worker3 = new Worker("worker.js");
// 
// var another_worker = new Worker("anotherWorker.js");