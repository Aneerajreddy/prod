const questions = [
  { question: "From which of the following structures does the saccule develop?", options: ["Saculus anterior", "Saculus posterior", "Pars superior", "Pars inferior"], answer: 3 },
  { question: "What is the surgical procedure performed to enlarge the cartilaginous segment of the outer ear canal?", options: ["Meatoplasty", "Tympanoplasty", "Myringoplasty", "Otoplasty"], answer: 0 },
  { question: "Stimulation of which causes cough when the external acoustic canal is scratched?", options: ["Auriculotemporal nerve", "Auricular branch of vagus", "Great auricular nerve", "Facial nerve"], answer: 1 },
  { question: "Which does not represent a characteristic of tubercular otitis media?", options: ["Ear ache", "Multiple perforations", "Pale granulation", "Foul smelling ear discharge"], answer: 0 },
  { question: "A skull fracture patient presents with this finding. Identify it.", options: ["Battle sign", "Bezold abscess", "Mastoiditis", "Griesinger sign"], answer: 0 },
  { question: "Mitomycin-C is used for which condition?", options: ["Subglottic stenosis", "Rhinocerebral mucormycosis", "Adenoidectomy", "Tympanoplasty"], answer: 0 },
  { question: "Breathing difficulties and unsuccessful extubation after total thyroidectomy most likely indicates:", options: ["Superior laryngeal nerve injury", "Unilateral recurrent laryngeal nerve injury", "Bilateral recurrent laryngeal nerve injury", "Hematoma"], answer: 2 },
  { question: "Nasal obstruction, anosmia, foul discharge and yellow-green crusts likely has which additional finding?", options: ["Roomy nasal cavity", "Nasal polyps", "Inferior turbinate hypertrophy", "Foreign body"], answer: 0 },
  { question: "Persistent epistaxis despite pinching and packing should next be managed by:", options: ["Ligation of external carotid artery", "Ligation of internal carotid artery", "Ligation of sphenopalatine artery", "Ligation of maxillary artery"], answer: 2 },
  { question: "Immediate action for bleeding from tonsillectomy site in recovery room:", options: ["Shift to OT, remove clots, cauterize/ligate vessel", "Shift to OT, start IV antibiotics, pack tonsillar fossa", "Give anticoagulants and wait", "Blood transfusion and wait"], answer: 0 },
  { question: "A 5-year-old with reduced hearing and the shown otoscopy finding likely has:", options: ["Myringitis bullosa", "Serous otitis media", "Acute otitis media", "Pneumo tympanum"], answer: 1 },
  { question: "Identify the structure (image-based original question):", options: ["Malleus", "Incus", "Stapes", "Vomer"], answer: 1 },
  { question: "Post-COVID diabetic with black nasal/palatal lesions should be confirmed with:", options: ["X-ray", "Biopsy with histopathologic examination", "Serum ferritin", "HbA1c"], answer: 1 },
  { question: "Inability to close eye, drooling, angle of mouth deviation indicates involvement of:", options: ["Facial nerve", "Trigeminal nerve", "Oculomotor nerve", "Glossopharyngeal nerve"], answer: 0 },
  { question: "Conscious adult choking in restaurant; identify procedure:", options: ["Heimlich’s maneuver", "Back slap", "Chest thrust", "Blind insertion of finger"], answer: 0 },
  { question: "Which does not characterize tubercular otitis media?", options: ["Ear ache", "Multiple perforations", "Pale granulation", "Foul smelling ear discharge"], answer: 0 },
  { question: "Accurate statement regarding keratosis obturans:", options: ["Failure of migration of desquamated epithelium along posterior meatal wall", "Widening of meatus and facial nerve palsy might be seen", "Associated bronchiectasis and sinusitis", "All of the above"], answer: 3 },
  { question: "Identify lesion of vocal cord (image-based original question):", options: ["Reinke’s edema", "Malignancy", "Tracheomalacia", "Laryngeal papilloma"], answer: 3 },
  { question: "Inspiratory stridor is associated with which type of lesions?", options: ["Supraglottic", "Subglottic", "Tracheal", "Bronchus"], answer: 0 },
  { question: "Technique shown in image (original question):", options: ["Epley’s manoeuvre", "Trotter’s method", "McGovern’s technique", "Valsalva manoeuvre"], answer: 1 }
];

const quotes = [
  "Great effort! Every question you attempt builds mastery.",
  "Keep going—you’re one consistent step closer to your NEET PG goal.",
  "Progress beats perfection. Your hard work will pay off!",
  "Excellent discipline! Trust the process and stay focused."
];

const quizForm = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const resultBox = document.getElementById("result");

function renderQuiz() {
  quizForm.innerHTML = "";
  questions.forEach((q, i) => {
    const card = document.createElement("section");
    card.className = "question-card";
    card.innerHTML = `<h3>Q${i + 1}. ${q.question}</h3>`;

    q.options.forEach((option, optIndex) => {
      const label = document.createElement("label");
      label.className = "option";
      label.innerHTML = `<input type="radio" name="q${i}" value="${optIndex}" /> ${option}`;
      card.appendChild(label);
    });

    quizForm.appendChild(card);
  });
}

function getUnansweredCount() {
  let unanswered = 0;
  questions.forEach((_, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) unanswered += 1;
  });
  return unanswered;
}

function gradeQuiz() {
  const unanswered = getUnansweredCount();
  if (unanswered > 0) {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `<div class="warning">Please answer all questions before submitting. Remaining: ${unanswered}</div>`;
    resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && Number(selected.value) === q.answer) score += 1;
  });

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <div class="score">Your Score: ${score} / ${questions.length}</div>
    <div class="quote">${quote}</div>
  `;
  resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
}

submitBtn.addEventListener("click", gradeQuiz);
resetBtn.addEventListener("click", () => {
  quizForm.reset();
  resultBox.classList.add("hidden");
  resultBox.innerHTML = "";
});

renderQuiz();
