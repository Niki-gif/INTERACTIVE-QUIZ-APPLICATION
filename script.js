const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

const quizData = [
    {
        question: "Q. What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Q. Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "Q. What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Coded Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },

        {
            question: "Q. Which language is primarily used for web development?",
            options: ["Python", "C++", "JavaScript", "Java"],
            answer: "JavaScript"
        },

        {
            question: "Q. Which programming language is known as the 'mother of all languages'?",
            options: ["C", "Python", "Assembly", "Java"],
            answer: "C"
        },
        {
            question: "Q. Which of the following is a backend programming language?",
            options: ["HTML", "CSS", "JavaScript", "Node.js"],
            answer: "Node.js"
        },
        {
            question: "Q. Which language is best for developing Android applications?",
            options: ["Swift", "Java", "Kotlin", "Dart"],
            answer: "Kotlin"
        },
        {
            question: "Q. What does 'OOP' stand for?",
            options: ["Object-Oriented Programming", "Optimal Object Processing", "Object-Oriented Python", "Ordered Object Parsing"],
            answer: "Object-Oriented Programming"
        },
        {
            question: "Q. Which database language is used to manage relational databases?",
            options: ["SQL", "MongoDB", "NoSQL", "PHP"],
            answer: "SQL"
        },
        {
            question: "Q. Which programming language is mainly used for AI and Machine Learning?",
            options: ["C++", "Python", "JavaScript", "Swift"],
            answer: "Python"
        },
        {
            question: "Q. Which of the following is a frontend framework?",
            options: ["Django", "Flask", "React", "Node.js"],
            answer: "React"
        },
        {
            question: "Q. Which of the following is NOT a programming language?",
            options: ["Java", "Python", "HTML", "C#"],
            answer: "HTML"
        },
        {
            question: "Q. Which language is mainly used for system programming?",
            options: ["C", "Java", "Ruby", "Perl"],
            answer: "C"
        }
    ];
    


let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(button, option);
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
}

function checkAnswer(button, selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    
    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    quizContainer.innerHTML = `<h2>You scored ${score} out of ${quizData.length}!</h2>`;
}

loadQuestion();
