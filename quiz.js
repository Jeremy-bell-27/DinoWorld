document.getElementById("submit").addEventListener("click", () => {
  let score = 0;
  const totalQuestions = 3;

  const answers = {
    q1: "Tricératops",
    q2: "Carnivore",
    q3: "Ses plaques dorsales"
  };

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  const resultText = `Vous avez ${score} bonnes réponses sur ${totalQuestions} !`;
  document.getElementById("result").textContent = resultText;

  document.getElementById("submit").style.display = "none";
  document.getElementById("restart").style.display = "inline-block";
});

document.getElementById("restart").addEventListener("click", () => {
  document.getElementById("quiz-form").reset();
  document.getElementById("result").textContent = "";
  document.getElementById("submit").style.display = "inline-block";
  document.getElementById("restart").style.display = "none";
});