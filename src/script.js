const btn = document.getElementById("btn");
const circle = document.getElementById("progress-circle");
const text = document.getElementById("circle-text");
const result = document.getElementById("result");

const radius = 80;
const circumference = 2 * Math.PI * radius;

// Initialize circle
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

btn.addEventListener("click", () => {
  const score = Number(document.getElementById("score").value);

  // Validation
  if (score < 300 || score > 850 || !score) {
    result.textContent = "Enter valid score (300 - 850)";
    result.style.color = "orange";
    circle.style.strokeDashoffset = circumference;
    text.textContent = "0%";
    return;
  }

  // Convert score to percentage
  const percent = ((score - 300) / 550) * 100;
  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDashoffset = offset;
  text.textContent = Math.round(percent) + "%";

  // Rating logic
  if (score < 500) {
    circle.style.stroke = "red";
    result.textContent = "Bad Credit Score";
    result.style.color = "red";
  } 
  else if (score < 650) {
    circle.style.stroke = "yellow";
    result.textContent = "Poor Credit Score";
    result.style.color = "yellow";
  } 
  else {
    circle.style.stroke = "lightgreen";
    result.textContent = "Good Credit Score";
    result.style.color = "lightgreen";
  }
});
