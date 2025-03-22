// প্রশ্ন এবং উত্তরগুলির ডেটা
const questions = [
    {
        question: "র + ম + ষ = ?",
        options: ["রমণ", "রমেশ", "রম্য", "রমণী"],
        correctAnswer: "রমেশ"
    },
    {
        question: "ক + ম + ল = ?",
        options: ["কমল", "কমলা", "কমলি", "কমলিন"],
        correctAnswer: "কমল"
    },
    {
        question: "প + ত + র = ?",
        options: ["পাত্র", "পত্র", "পাতার", "পাতা"],
        correctAnswer: "পাত্র"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM এলিমেন্টগুলি সিলেক্ট করুন
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

// প্রশ্ন লোড করুন
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

// উত্তর চেক করুন
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        scoreElement.textContent = score;
        alert("সঠিক উত্তর!");
    } else {
        alert("ভুল উত্তর! সঠিক উত্তর: " + currentQuestion.correctAnswer);
    }
}

// পরবর্তী প্রশ্ন লোড করুন
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("গেম শেষ! আপনার স্কোর: " + score);
        currentQuestionIndex = 0;
        score = 0;
        scoreElement.textContent = score;
        loadQuestion();
    }
});

// প্রথম প্রশ্ন লোড করুন
loadQuestion();