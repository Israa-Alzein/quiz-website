document.addEventListener("DOMContentLoaded", () => {
const questions = [
    {
    text: "Compare between the two numbers: 222 _ 333",
    options: ["less", "equal", "greater"],
    answer: "less"
    },
    {
    text: "What is 5 + 3?",
    options: ["6", "8", "9"],
    answer: "8"
    },
    {
    text: "Which one is a noun?",
    options: ["Run", "Happy", "Apple"],
    answer: "Apple"
    }
];

let currentQuestion = 0;
let score = 0;
let streak = 0;

const questionBox = document.getElementById("questionBox");
const questionNumber = document.getElementById("questionNumber");
const optionsForm = document.getElementById("optionsForm");
const submitBtn = document.getElementById("submitBtn");
const scoreHeader = document.getElementById("scoreHeader");
const streakHeader = document.getElementById("streakHeader");

function loadQuestion() {
    const q = questions[currentQuestion];

    questionNumber.textContent = `${currentQuestion + 1}/3`;
    questionBox.innerHTML = `<p>${q.text}</p>`;

    optionsForm.innerHTML = "";

    q.options.forEach((option, index) => {
    
    const label = document.createElement("label");
    label.className = "option-box";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = option;
    input.required = true;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    optionsForm.appendChild(label);
    });
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
    alert("Please select an answer!");
    return;
    }

    const answer = selected.value;
    const correct = questions[currentQuestion].answer;

    if (answer === correct) {
    score += 10;
    streak += 1;
    } else {
    streak = 0;
    }

    currentQuestion++;

    // Update headers
    scoreHeader.textContent = `${score} / 30`;
    streakHeader.textContent = streak;

    if (currentQuestion < questions.length) {
    loadQuestion();
    } else {
        questionBox.innerHTML = `<p>🎉 Quiz Completed!</p>`;
        optionsForm.innerHTML = "";
        questionNumber.textContent = "";
        submitBtn.style.display = "none";
        doneBtn.style.display = "inline-block";

        doneBtn.addEventListener("click", () => {
            window.location.href = "./../pages/home.html";
        });
    }
});

// Start
loadQuestion();
});
