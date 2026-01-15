import "./style.css";


const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", function checkScore() {
  const score = Number(document.getElementById("score").value);

  if (!score || score < 300 || score > 850) {
    result.textContent = "Enter score";
    result.style.color = "orange";
    return;
  }

  if (score < 500) {
    result.textContent = "Bad Score";
    result.style.color = "red";
  } else if (score < 650) {
    result.textContent = "Bad Score";
    result.style.color = "yellow";
  } else {
    result.textContent = "good Score";
    result.style.color = "green";
  }
});
