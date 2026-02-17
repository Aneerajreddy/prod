const questions = [
  { question: "From which of the following structures does the saccule develop?", options: ["Saculus anterior", "Saculus posterior", "Pars superior", "Pars inferior"], answer: 3 },
  { question: "What is the surgical procedure performed to enlarge the cartilaginous segment of the outer ear canal?", options: ["Meatoplasty", "Tympanoplasty", "Myringoplasty", "Otoplasty"], answer: 0 },
  { question: "Stimulation of which causes cough when the external acoustic canal is scratched?", options: ["Auriculotemporal nerve", "Auricular branch of vagus", "Great auricular nerve", "Facial nerve"], answer: 1 },
  { question: "Which does not represent a characteristic of tubercular otitis media?", options: ["Ear ache", "Multiple perforations", "Pale granulation", "Foul smelling ear discharge"], answer: 0 },
  { question: "A skull fracture patient presents with this finding. Identify it.", options: ["Battle sign", "Bezold abscess", "Mastoiditis", "Griesinger sign"], answer: 0, image: "assets/q5-battle-sign.svg", imageAlt: "Battle sign style schematic" },
  { question: "Mitomycin-C is used for which condition?", options: ["Subglottic stenosis", "Rhinocerebral mucormycosis", "Adenoidectomy", "Tympanoplasty"], answer: 0 },
  { question: "Breathing difficulties and unsuccessful extubation after total thyroidectomy most likely indicates:", options: ["Superior laryngeal nerve injury", "Unilateral recurrent laryngeal nerve injury", "Bilateral recurrent laryngeal nerve injury", "Hematoma"], answer: 2 },
  { question: "Nasal obstruction, anosmia, foul discharge and yellow-green crusts likely has which additional finding?", options: ["Roomy nasal cavity", "Nasal polyps", "Inferior turbinate hypertrophy", "Foreign body"], answer: 0 },
  { question: "Persistent epistaxis despite pinching and packing should next be managed by:", options: ["Ligation of external carotid artery", "Ligation of internal carotid artery", "Ligation of sphenopalatine artery", "Ligation of maxillary artery"], answer: 2 },
  { question: "Immediate action for bleeding from tonsillectomy site in recovery room:", options: ["Shift to OT, remove clots, cauterize/ligate vessel", "Shift to OT, start IV antibiotics, pack tonsillar fossa", "Give anticoagulants and wait", "Blood transfusion and wait"], answer: 0 },
  { question: "A 5-year-old with reduced hearing and the shown otoscopy finding likely has:", options: ["Myringitis bullosa", "Serous otitis media", "Acute otitis media", "Pneumo tympanum"], answer: 1, image: "assets/q11-otoscopy.svg", imageAlt: "Otoscopy style tympanic membrane image" },
  { question: "Identify the structure (image-based original question):", options: ["Malleus", "Incus", "Stapes", "Vomer"], answer: 1, image: "assets/q12-incus.svg", imageAlt: "Incus ossicle illustration" },
  { question: "Post-COVID diabetic with black nasal/palatal lesions should be confirmed with:", options: ["X-ray", "Biopsy with histopathologic examination", "Serum ferritin", "HbA1c"], answer: 1 },
  { question: "Inability to close eye, drooling, angle of mouth deviation indicates involvement of:", options: ["Facial nerve", "Trigeminal nerve", "Oculomotor nerve", "Glossopharyngeal nerve"], answer: 0 },
  { question: "Conscious adult choking in restaurant; identify procedure:", options: ["Heimlich’s maneuver", "Back slap", "Chest thrust", "Blind insertion of finger"], answer: 0 },
  { question: "Which does not characterize tubercular otitis media?", options: ["Ear ache", "Multiple perforations", "Pale granulation", "Foul smelling ear discharge"], answer: 0 },
  { question: "Accurate statement regarding keratosis obturans:", options: ["Failure of migration of desquamated epithelium along posterior meatal wall", "Widening of meatus and facial nerve palsy might be seen", "Associated bronchiectasis and sinusitis", "All of the above"], answer: 3 },
  { question: "Identify lesion of vocal cord (image-based original question):", options: ["Reinke’s edema", "Malignancy", "Tracheomalacia", "Laryngeal papilloma"], answer: 3, image: "assets/q18-papilloma.svg", imageAlt: "Vocal cord papilloma schematic" },
  { question: "Inspiratory stridor is associated with which type of lesions?", options: ["Supraglottic", "Subglottic", "Tracheal", "Bronchus"], answer: 0 },
  { question: "Technique shown in image (original question):", options: ["Epley’s manoeuvre", "Trotter’s method", "McGovern’s technique", "Valsalva manoeuvre"], answer: 1, image: "assets/q20-trotter.svg", imageAlt: "Trotter method positional schematic" },
  { question: "Little’s area is located on which part of the nasal septum?", options: ["Posterosuperior", "Anteroinferior", "Posteroinferior", "Roof of nose"], answer: 1 },
  { question: "Most common organism in acute otitis media is:", options: ["Streptococcus pneumoniae", "Pseudomonas aeruginosa", "Staphylococcus aureus", "Klebsiella"], answer: 0 },
  { question: "Most common benign tumor of larynx in children is:", options: ["Laryngeal papilloma", "Vocal nodule", "Hemangioma", "Fibroma"], answer: 0 },
  { question: "Rinne test compares:", options: ["Air conduction and bone conduction", "Intensity between ears", "Middle ear pressure", "Speech discrimination"], answer: 0 },
  { question: "Gold standard investigation for sinus disease is:", options: ["X-ray PNS", "CT PNS", "MRI brain", "Diagnostic nasal endoscopy only"], answer: 1 },
  { question: "Most common site of nasal septal deviation is:", options: ["Posterior septum", "Caudal septum", "Junction of cartilage and bone", "Perpendicular plate only"], answer: 2 },
  { question: "Classical triad of Meniere disease includes vertigo, tinnitus, and:", options: ["Conductive hearing loss", "Sensorineural hearing loss", "Otalgia", "Otorrhea"], answer: 1 },
  { question: "Most common nerve injured during parotid surgery is:", options: ["Hypoglossal", "Facial", "Glossopharyngeal", "Vagus"], answer: 1 },
  { question: "Adenoid hypertrophy commonly causes:", options: ["Inspiratory stridor", "Nasal obstruction and mouth breathing", "Hemoptysis", "Facial palsy"], answer: 1 },
  { question: "Carhart notch is seen in:", options: ["Otosclerosis", "Presbycusis", "Noise-induced hearing loss", "Labyrinthitis"], answer: 0 },
  { question: "Commonest site for foreign body lodgment in esophagus is:", options: ["At cricopharynx", "Mid esophagus", "Lower esophageal sphincter", "Cardia"], answer: 0 },
  { question: "Most common malignant tumor of nasopharynx is:", options: ["Adenocarcinoma", "Squamous cell carcinoma", "Lymphoma", "Melanoma"], answer: 1 },
  { question: "In peritonsillar abscess, uvula is typically:", options: ["Central", "Deviated to opposite side", "Edematous but midline", "Not visible"], answer: 1 },
  { question: "Most common complication of chronic suppurative otitis media (unsafe type) is:", options: ["Facial palsy", "Mastoiditis", "Cholesteatoma", "Labyrinthitis"], answer: 2 },
  { question: "The preferred initial treatment for allergic rhinitis is:", options: ["Systemic steroids", "Intranasal corticosteroids", "Oral antibiotics", "Surgery"], answer: 1 },
  { question: "Hoarseness lasting more than 3 weeks should be evaluated for:", options: ["Laryngeal malignancy", "Only viral laryngitis", "GERD alone", "Anemia"], answer: 0 },
  { question: "Most common cause of unilateral nasal obstruction with foul-smelling discharge in children is:", options: ["Nasal polyp", "Deviated septum", "Foreign body", "Atrophic rhinitis"], answer: 2 },
  { question: "The tuning fork frequency most commonly used in clinical ENT practice is:", options: ["128 Hz", "256 Hz", "512 Hz", "1024 Hz"], answer: 2 },
  { question: "Danger area of face infection may spread to cavernous sinus via:", options: ["Facial vein", "Angular vein and ophthalmic veins", "External jugular vein", "Retromandibular vein"], answer: 1 },
  { question: "Most common salivary gland tumor is:", options: ["Pleomorphic adenoma", "Warthin tumor", "Mucoepidermoid carcinoma", "Adenoid cystic carcinoma"], answer: 0 }
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

    if (q.image) {
      const img = document.createElement("img");
      img.src = q.image;
      img.alt = q.imageAlt || `Image for question ${i + 1}`;
      img.className = "question-image";
      card.appendChild(img);
    }

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

function buildReview() {
  const reviewItems = questions.map((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const selectedIndex = selected ? Number(selected.value) : -1;
    const isCorrect = selectedIndex === q.answer;
    const selectedText = selectedIndex >= 0 ? q.options[selectedIndex] : "No answer";
    const correctText = q.options[q.answer];

    if (isCorrect) {
      return `<li class="review-item correct"><strong>Q${i + 1}:</strong> Correct ✅ (${correctText})</li>`;
    }

    return `<li class="review-item wrong"><strong>Q${i + 1}:</strong> Your answer: <span class="wrong-answer">${selectedText}</span> | Correct answer: <span class="correct-answer">${correctText}</span></li>`;
  });

  return `<ul class="review-list">${reviewItems.join("")}</ul>`;
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
  const reviewHtml = buildReview();
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <div class="score">Your Score: ${score} / ${questions.length}</div>
    <div class="quote">${quote}</div>
    <h3 class="review-title">Answer Review</h3>
    ${reviewHtml}
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
