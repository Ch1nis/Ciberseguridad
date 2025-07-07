
document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById('quizForm');
  if (quizForm) {
    quizForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const answers = { q1: 'b', q2: 'c', q3: 'a' };
      let score = 0;

      for (const [question, correct] of Object.entries(answers)) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correct) {
          score++;
        }
      }

      const resultDiv = document.getElementById('quizResult');
      const total = Object.keys(answers).length;

      if (resultDiv) {
        if (score === total) {
          resultDiv.innerHTML = `<div class="alert alert-success">¡Excelente! Obtuviste ${score}/${total}.</div>`;
        } else if (score >= 2) {
          resultDiv.innerHTML = `<div class="alert alert-info">¡Bien! Obtuviste ${score}/${total}.</div>`;
        } else {
          resultDiv.innerHTML = `<div class="alert alert-warning">Necesitas mejorar. Obtuviste ${score}/${total}.</div>`;
        }
      }
    });
  }
});
