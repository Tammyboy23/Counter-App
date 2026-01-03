let score = 0;


function first(){
  score--;
  document.getElementById("text").textContent = score;
}
function second(){
  score = 0;
  document.getElementById("text").textContent = score;
}
function third(){
  score++;
  document.getElementById("text").textContent = score;
}

const d = new Date();
console.log(d)