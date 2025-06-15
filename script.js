const playerName = document.getElementById('playerName');
const quizCategory = document.getElementById('quizCategory');
const difficulty = document.getElementById('difficulty');
const startBtn = document.getElementById('startBtn');
const navLinks = document.querySelector('.nav-links');
const pages = document.querySelectorAll('.page');

document.querySelector('.hamburger').addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('[data-target]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(el.dataset.target).classList.add('active');
    navLinks.classList.remove('active');
    if (el.dataset.target === 'quiz-setup') resetForm();
    if (el.dataset.target === 'scores') updateLeaderboard();
  });
});

function resetForm() {
  playerName.value = '';
  quizCategory.value = '';
  difficulty.value = '';
  validateForm();
}

function validateForm() {
  startBtn.disabled = !(playerName.value && quizCategory.value && difficulty.value);
}

[playerName, quizCategory, difficulty].forEach(el => {
  el.addEventListener('input', validateForm);
  el.addEventListener('change', validateForm);
});

startBtn.addEventListener('click', () => {
  localStorage.setItem('playerName', playerName.value);
  localStorage.setItem('category', quizCategory.value);
  localStorage.setItem('difficulty', difficulty.value);
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById('quiz-engine').classList.add('active');
});

function updateLeaderboard() {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
  scores.slice(0, 10).forEach(score => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${score.name}</td><td>${score.score}%</td><td>${score.time}s</td><td>${score.date}</td><td>${score.category}</td>`;
    tbody.appendChild(tr);
  });
}
