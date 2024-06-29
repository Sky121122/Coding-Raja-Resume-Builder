const form = document.getElementById('resume-form');
const experienceContainer = document.getElementById('experience-container');
const educationContainer = document.getElementById('education-container');
const generateResumeBtn = document.getElementById('generate-resume');
const resumePreview = document.getElementById('resume-preview');

let experienceCount = 1;
let educationCount = 1;

// Function to create experience section
function createExperience() {
  const experienceSection = document.createElement('div');
  experienceSection.classList.add('experience');
  experienceSection.innerHTML = `
    <h3>Experience <span class="math-inline">\{experienceCount\}</h3\>
<label for\="company\-</span>{experienceCount}">Company Name:</label>
    <input type="text" id="company-<span class="math-inline">\{experienceCount\}" name\="company\[\]" required\>
<label for\="title\-</span>{experienceCount}">Job Title:</label>
    <input type="text" id="title-<span class="math-inline">\{experienceCount\}" name\="title\[\]" required\>
<label for\="dates\-</span>{experienceCount}">Dates (YYYY-MM - YYYY-MM):</label>
    <input type="text" id="dates-<span class="math-inline">\{experienceCount\}" name\="dates\[\]" required\>
<label for\="description\-</span>{experienceCount}">Description:</label>
    <textarea id="description-${experienceCount}" name="description[]" rows="5"></textarea>
    <button type="button" class="remove-experience">Remove Experience</button>
  `;
  experienceContainer.appendChild(experienceSection);
  experienceCount++;
}

// Function to create education section
function createEducation() {
  const educationSection = document.createElement('div');
  educationSection.classList.add('education');
  educationSection.innerHTML =
