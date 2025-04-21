document.addEventListener("DOMContentLoaded", () => {
    const questionBox = document.getElementById("questionBox");
    const questionNumber = document.getElementById("questionNumber");
    const optionsForm = document.getElementById("optionsForm");
    const submitBtn = document.getElementById("submitBtn");
    const doneBtn = document.getElementById("doneBtn");
    const scoreHeader = document.getElementById("scoreHeader");
    const streakHeader = document.getElementById("streakHeader");
    const selectedTopic = localStorage.getItem("selectedTopic");
    const allQuestions = JSON.parse(localStorage.getItem("allQuestions")) || {
        "Algebric expressions": [
            {
                text: "What is the value of 3x + 2 when x = 4?",
                options: ["10", "14", "12"],
                answer: "14"
            },
            {
                text: "Simplify: 2x + 3x",
                options: ["5", "5x", "6x"],
                answer: "5x"
            },
            {
                text: "Which is an algebraic expression?",
                options: ["3 + 5", "x + 2", "7 * 9"],
                answer: "x + 2"
            }
        ],
        "linear equations": [
            {
                text: "Solve for x: 2x = 10",
                options: ["4", "5", "6"],
                answer: "5"
            },
            {
                text: "Which of the following is a linear equation?",
                options: ["x² = 4", "2x + 3 = 7", "x³ - 1 = 0"],
                answer: "2x + 3 = 7"
            },
            {
                text: "If x - 4 = 0, what is x?",
                options: ["0", "4", "-4"],
                answer: "4"
            }
        ],
        "equation straight lines": [
            {
                text: "What is the slope of the line y = 3x + 2?",
                options: ["3", "2", "1"],
                answer: "3"
            },
            {
                text: "In y = mx + b, what does 'b' represent?",
                options: ["slope", "x-intercept", "y-intercept"],
                answer: "y-intercept"
            },
            {
                text: "Which line is parallel to y = 2x + 1?",
                options: ["y = 2x - 5", "y = -2x + 3", "y = x + 2"],
                answer: "y = 2x - 5"
            }
        ],
        "linear inequalities": [
            {
                text: "Solve: x + 5 < 10",
                options: ["x < 5", "x > 5", "x = 5"],
                answer: "x < 5"
            },
            {
                text: "What is the graph of x > 3?",
                options: ["Open circle at 3, shaded right", "Closed circle at 3, shaded left", "Open circle at 3, shaded left"],
                answer: "Open circle at 3, shaded right"
            },
            {
                text: "Which is a solution to 2x - 4 > 0?",
                options: ["x = 1", "x = 3", "x = 0"],
                answer: "x = 3"
            }
        ],
        "Angles": [
            {
                text: "What is the sum of angles in a triangle?",
                options: ["90°", "180°", "360°"],
                answer: "180°"
            },
            {
                text: "What do you call an angle less than 90°?",
                options: ["Obtuse", "Right", "Acute"],
                answer: "Acute"
            },
            {
                text: "What is the angle between the hands of a clock at 3:00?",
                options: ["90°", "180°", "60°"],
                answer: "90°"
            }
        ],
        "Area": [
            {
                text: "Area of a rectangle is?",
                options: ["length + width", "length × width", "2 × (length + width)"],
                answer: "length × width"
            },
            {
                text: "What is the area of a triangle with base 10 and height 5?",
                options: ["50", "25", "30"],
                answer: "25"
            },
            {
                text: "Area of a circle formula?",
                options: ["πr²", "2πr", "πd"],
                answer: "πr²"
            }
        ],
        "Basic Geometry": [
            {
                text: "What is a polygon with 5 sides called?",
                options: ["Pentagon", "Hexagon", "Octagon"],
                answer: "Pentagon"
            },
            {
                text: "Which shape has no edges?",
                options: ["Sphere", "Cube", "Pyramid"],
                answer: "Sphere"
            },
            {
                text: "How many sides does a hexagon have?",
                options: ["5", "6", "8"],
                answer: "6"
            }
        ],
        "Circles": [
            {
                text: "What is the distance around a circle?",
                options: ["Diameter", "Radius", "Circumference"],
                answer: "Circumference"
            },
            {
                text: "Half of the diameter is the:",
                options: ["Radius", "Chord", "Arc"],
                answer: "Radius"
            },
            {
                text: "Which formula is for circumference?",
                options: ["πr²", "2πr", "πd²"],
                answer: "2πr"
            }
        ],
        "Grammar in Writing": [
            {
                text: "What is the correct way to write a compound sentence?",
                options: [" I love pizza. Because it's delicious.", " I love pizza, it’s delicious.", "I love pizza, and it’s delicious."],
                answer: "I love pizza, and it’s delicious."
            },
            {
                text: "Which sentence uses correct punctuation?:",
                options: [" He said “I'll be there soon”.", "He said, “I’ll be there soon.”", "He said “I’ll be there soon.”"],
                answer: "He said, “I’ll be there soon.”"
            },
            {
                text: "What is the function of a semicolon?",
                options: ["To replace a comma", "To join two related independent clauses", "To end a sentence"],
                answer: "To join two related independent clauses"
            }
        ],
        "Parts of Speech": [
            {
                text: "What part of speech is the word quickly?",
                options: ["Adjective", "Noun", "Adverb"],
                answer: "Adverb"
            },
            {
                text: "Which word is a preposition?",
                options: ["Under", "Fast", "Dog"],
                answer: "Under"
            },
            {
                text: "Which sentence contains a conjunction?",
                options: [" I walked home.", " I walked home and ate lunch.", " I walk."],
                answer: " I walked home and ate lunch."
            }
        ],
        "Syntax": [
            {
                text: "Which sentence is syntactically correct?",
                options: ["Pizza the love I do.", "I do love pizza.", "Do I pizza love."],
                answer: "I do love pizza."
            },
            {
                text: "What is a run-on sentence?",
                options: ["A sentence with two or more independent clauses improperly joined", " A very long sentence", "A sentence without a verb"],
                answer: "A sentence with two or more independent clauses improperly joined"
            },
            {
                text: "Identify the subject in the sentence: “The cat sat on the mat.”",
                options: ["sat", " on", "The cat"],
                answer: "The cat"
            }
        ],
        "Word Relationships": [
            {
                text: "Which pair of words are antonyms?",
                options: ["Hot - Cold", "Big - Large", "Jump - Leap"],
                answer: "Big - Large"
            },
            {
                text: "What is a synonym for “happy”?",
                options: ["Sad", "Joyful", "Angry"],
                answer: "Joyful"
            },
            {
                text: "Which pair of words have a cause-effect relationship?",
                options: ["Fire - Burn", "Cat - Dog", "Blue - Sky"],
                answer: "Fire - Burn"
            }
        ],
        "Specialized Vocabulary": [
            {
                text: "What does “photosynthesis” relate to?",
                options: [" Cooking", "Plants", "Cars"],
                answer: "Plants"
            },
            {
                text: "Which word is specific to computers?",
                options: [" Keyboard", "Apple", " Tree"],
                answer: " Keyboard"
            },
            {
                text: "What is the field of “biology”?",
                options: ["Numbers", "Life", "Machines"],
                answer: "Life"
            }
        ],
        "Parts of Speech": [
            {
                text: "What type of word is “beautiful”?",
                options: ["Noun", "Verb", "Adjective"],
                answer: "Adjective"
            },
            {
                text: "Which is an example of a verb?",
                options: ["Run", "Happy", "Tall"],
                answer: "Run"
            },
            {
                text: "Identify the noun in the sentence: “The girl smiled.”",
                options: ["smiled", "the", "girl"],
                answer: "girl"
            }
        ],
        "Spelling": [
            {
                text: "Choose the correct spelling:",
                options: ["Recieve", "Receive", "Recive"],
                answer: "Receive"
            },
            {
                text: "Which of the following is spelled correctly?",
                options: ["Definately", "Definitely", "Defanitely"],
                answer: "Definitely"
            },
            {
                text: "Identify the word with a silent letter:",
                options: ["Knife", "Cat", "Star"],
                answer: "Knife"
            }
        ],
        "All about me": [
            {
                text: "What is something you can share about yourself on the first day of school?",
                options: ["Your favorite subject", "Your phone password", "Your parents' jobs"],
                answer: "Your favorite subject"
            },
            {
                text: "What is a good way to introduce yourself to classmates?",
                options: ["Stay silent", "Say your name and one fun fact", "Only talk to the teacher"],
                answer: "Say your name and one fun fact"
            },
            {
                text: "Why is it important to tell others about your hobbies?",
                options: ["To show off", "To make friends with similar interests", "To get better grades"],
                answer: "To make friends with similar interests"
            }
        ],
        "Pronouncing Names Correctly": [
            {
                text: "Why should we try to say everyone's name correctly?",
                options: ["To be respectful", "To avoid learning names", "To shorten them"],
                answer: "To be respectful"
            },
            {
                text: "What should you do if you’re unsure how to say someone’s name?",
                options: ["Avoid saying it", "Guess loudly", "Politely ask them"],
                answer: "Politely ask them"
            },
            {
                text: "What can mispronouncing someone’s name lead to?",
                options: ["Stronger friendships", "Confusion or disrespect", "Nothing at all"],
                answer: "Confusion or disrespect"
            }
        ],
        "How to Email your Teacher": [
            {
                text: "What should your email to a teacher always include?",
                options: ["A greeting, body, and signature", "Memes", "Just a question"],
                answer: "A greeting, body, and signature"
            },
            {
                text: "What’s a good way to start an email to your teacher?",
                options: ["Hey!", "Yo teach!", "Dear Mr./Ms. [Last Name]"],
                answer: "Dear Mr./Ms. [Last Name]"
            },
            {
                text: "Why is it important to use proper grammar in your emails?",
                options: ["To sound serious and respectful", "To be funny", "To confuse them"],
                answer: "To sound serious and respectful"
            }
        ],
        "Setting Goals for the Year": [
            {
                text: "What is an academic goal you might set for the year?",
                options: ["Make new friends", "Improve math grades", "Eat more snacks"],
                answer: "Improve math grades"
            },
            {
                text: "How can you track your goals?",
                options: ["Ignore them", "Write them down and check progress", "Wish for the best"],
                answer: "Write them down and check progress"
            },
            {
                text: "Why is it good to set personal goals?",
                options: ["To feel proud and stay focused", "To get extra homework", "To skip class"],
                answer: "To feel proud and stay focused"
            }
        ],
        "Time Management": [
            {
                text: "What is one strategy for managing your time?",
                options: ["Procrastinate", "Use a planner or calendar", "Avoid homework"],
                answer: "Use a planner or calendar"
            },
            {
                text: "Why is managing your time important?",
                options: ["So you can get more sleep", "So you miss assignments", "So you forget less"],
                answer: "So you can get more sleep"
            },
            {
                text: "When should you start big projects?",
                options: ["Right before the deadline", "As soon as they're assigned", "Never"],
                answer: "As soon as they're assigned"
            }
        ]

    };;
    const questions = allQuestions[selectedTopic] || [];

    let currentQuestion = 0;
    let score = 0;
    let streak = 0;

    localStorage.setItem("allQuestions", JSON.stringify(allQuestions));

    if (questions.length === 0) {
        alert("No questions found for this topic.");
        return;
    }


    function loadQuestion() {
        const q = questions[currentQuestion];

        questionNumber.textContent = `${currentQuestion + 1} / ${questions.length}`;
        questionBox.innerHTML = `<p>${q.text}</p>`;
        optionsForm.innerHTML = "";

        q.options.forEach((option) => {
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

        scoreHeader.textContent = `${score} / ${questions.length * 10}`;
        streakHeader.textContent = streak;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            questionBox.innerHTML = `<p>🎉 Quiz Completed!</p>`;
            optionsForm.innerHTML = "";
            questionNumber.textContent = "";
            submitBtn.style.display = "none";
            doneBtn.style.display = "inline-block";


            
            // Save user result in local Storage

            const currentUser = JSON.parse(localStorage.getItem("currentUser"));


            const username = currentUser.username;
            const gender = currentUser.gender;
            const finalscore = score;
            const quiz = questions
            

            const result = {
                username: username,
                gender: gender,
                score: finalscore,
                quiz:quiz
            };

            const userResults = JSON.parse(localStorage.getItem("userResults")) || [];
            userResults.push(result);
            localStorage.setItem("userResults", JSON.stringify(userResults));




            doneBtn.addEventListener("click", () => {
                window.location.href = "./../pages/home.html";
            });
        }
    });

    loadQuestion();


});


//create user result local storage
// Save user result in localStorage

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const username = currentUser.username;
const gender = currentUser.gender;
const userScore = finalscore;


const result = {
    username: username,
    gender: gender,
    score: score,
    userIcon: userIcon
};

const userResults = JSON.parse(localStorage.getItem("userResults")) || [];
userResults.push(result);
localStorage.setItem("userResults", JSON.stringify(userResults));

