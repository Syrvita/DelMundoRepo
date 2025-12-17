document.addEventListener("DOMContentLoaded", () => {
  
  // A. THEME TOGGLE
  const themeBtn = document.getElementById("themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // B. EDIT JOB TITLE
  const editJobBtn = document.getElementById("editJobBtn");
  const jobTitle = document.querySelector(".job-title");
  editJobBtn.addEventListener("click", () => {
    const newTitle = prompt("Enter new job title:");
    if (newTitle !== null && newTitle.trim() !== "") {
      jobTitle.textContent = newTitle;
    }
  });

  // C. SHOW/HIDE SKILLS
  const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
  const skillsSection = document.getElementById("skillsSection");
  toggleSkillsBtn.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
      toggleSkillsBtn.textContent = "Hide Skills";
    } else {
      skillsSection.style.display = "none";
      toggleSkillsBtn.textContent = "Show Skills";
    }
  });

  // D. CHARACTER COUNTER
  const msgBox = document.getElementById("msgBox");
  const counter = document.getElementById("counter");
  msgBox.addEventListener("keyup", () => {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
  });

  // E. FORM VALIDATION
  window.validateForm = function () {
    const nameField = document.getElementById("nameField").value.trim();
    const emailField = document.getElementById("emailField").value.trim();

    if (nameField === "" || emailField === "") {
      alert("Name and Email are required.");
      return false;
    }
    return true;
  };

  // F. AUTO DATE
  const dateDisplay = document.getElementById("dateDisplay");
  dateDisplay.textContent = new Date().toDateString();

  // G. EXTRA FEATURE — RANDOM QUOTE
  const quoteBtn = document.getElementById("quoteBtn");
  const quoteBox = document.getElementById("quoteBox");

  const quotes = [
    "Stay sharp.",
    "Build without hesitation.",
    "Think in straight lines.",
    "Precision outlives motivation.",
    "Silence produces clarity."
  ];

  quoteBtn.addEventListener("click", () => {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = q;
  });
});
