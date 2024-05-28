const questions = [
    {
        question: "Teknologi energi terbarukan mana yang diperkirakan akan menjadi lebih dominan pada tahun 2024 ?",
        answers: [
            { text: "A. Tenaga Surya", correct: true },
            { text: "B. Tenaga Angin", correct: false },
            { text: "C. Biomassa", correct: false },
            { text: "D. Tenaga Gelombang", correct: false }
        ]
    },
    {
        question: "Algoritma AI terbaru pada tahun 2024 banyak menggunakan teknik pembelajaran apa ?",
        answers: [
            { text: "A. Deep Learning", correct: false },
            { text: "B. Reinforcement Learning", correct: true },
            { text: "C. Semi-Supervised Learning", correct: false },
            { text: "D. Transfer Learning", correct: false }
        ]
    },
    {
        question: "Pada tahun 2024, apa kemajuan utama dalam komputasi kuantum ?",
        answers: [
            { text: "A. Stabilitas Qubit", correct: true },
            { text: "B. Kecepatan Pemrosesan", correct: false },
            { text: "C. Kapasitas Penyimpanan", correct: false },
            { text: "D. Pengurangan Ukuran Hardware", correct: false }
        ]
    },
    {
        question: "Aplikasi metaverse mana yang paling banyak digunakan untuk pertemuan virtual di tahun 2024 ?",
        answers: [
            { text: "A. Horizon Workrooms", correct: false },
            { text: "B. Microsoft Mesh", correct: true },
            { text: "C. Decentraland", correct: false },
            { text: "D. Roblox", correct: false }
        ]
    },
    {
        question: "Teknologi jaringan apa yang diharapkan untuk mulai menggantikan 5G pada akhir 2024 ?",
        answers: [
            { text: "A. 6G", correct: true },
            { text: "B. 5G+", correct: false },
            { text: "C. Li-Fi", correct: false },
            { text: "D. Satelit Broadband", correct: false }
        ]
    },
    {
        question: "Perangkat pintar rumah tangga mana yang memiliki peningkatan adopsi tertinggi pada tahun 2024 ?",
        answers: [
            { text: "A. Termostat Pintar", correct: false },
            { text: "B. Speaker Pintar", correct: false },
            { text: "C. Kunci Pintu Pintar", correct: false },
            { text: "D. Penyedot Debu Robot", correct: true }
        ]
    },
    {
        question: "Pada tahun 2024, fitur keamanan baru apa yang diperkenalkan pada mobil otonom ?",
        answers: [
            { text: "A. Deteksi Jalan Basah", correct: false },
            { text: "B. Pengenalan Suara Pengemudi", correct: false },
            { text: "C. Sistem Anti-Tabrak", correct: false },
            { text: "D. Navigasi Otonom di Jalan Sempit", correct: true }
        ]
    },
    {
        question: "Apa aplikasi blockchain yang paling banyak digunakan untuk transaksi keuangan pada tahun 2024 ?",
        answers: [
            { text: "A. Ethereum", correct: true },
            { text: "B. Bitcoin", correct: false },
            { text: "C. Ripple", correct: false },
            { text: "D. Ripple", correct: false }
        ]
    },
    {
        question: "Headset VR terbaru tahun 2024 menonjol karena fitur apa ?",
        answers: [
            { text: "A. Resolusi Tinggi", correct: false },
            { text: "B. Koneksi Nirkabel", correct: false },
            { text: "C. Pelacakan Mata", correct: true },
            { text: "D. Berat Ringan", correct: false }
        ]
    },
    {
        question: "Ancaman keamanan siber terbesar yang dihadapi perusahaan pada tahun 2024 adalah ?",
        answers: [
            { text: "A. Serangan Ransomware", correct: true },
            { text: "B. Phishing", correct: false },
            { text: "C. Serangan DDOS", correct: false },
            { text: "D. Malware Baru", correct: false }
        ]
    },
    {
        question: "Fitur e-commerce yang paling inovatif pada tahun 2024 adalah ?",
        answers: [
            { text: "A. Pembayaran dengan Cryptocurrency", correct: false },
            { text: "B. Pengiriman Drone", correct: true },
            { text: "C. AI Chatbots", correct: false },
            { text: "D. Realitas Augmented untuk Produk", correct: false }
        ]
    },
    {
        question: "Perangkat wearable baru apa yang populer di kalangan konsumen pada tahun 2024 ?",
        answers: [
            { text: "A. Smart Glasses", correct: true },
            { text: "B. Fitness Tracker", correct: false },
            { text: "C. Smart Watch", correct: false },
            { text: "D. Hearables", correct: false }
        ]
    },
    {
        question: "Platform pendidikan digital mana yang paling banyak digunakan pada tahun 2024 ?",
        answers: [
            { text: "A. Coursera", correct: true },
            { text: "B. Udemy", correct: false },
            { text: "C. Khan Academy", correct: false },
            { text: "D. EdX", correct: false }
        ]
    },
    {
        question: "Jenis robot apa yang paling banyak diadopsi di sektor industri pada tahun 2024 ?",
        answers: [
            { text: "A. Robot Kolaboratif", correct: true },
            { text: "B. Robot Pengepak", correct: false },
            { text: "C. Robot Assembling", correct: false },
            { text: "D.  Drone Industri", correct: false }
        ]
    },
    {
        question: "Konsol game mana yang merilis versi terbaru dengan teknologi terdepan pada tahun 2024 ?",
        answers: [
            { text: "A. PlayStation", correct: true },
            { text: "B. Xbox", correct: false },
            { text: "C. Nintendo", correct: false },
            { text: "D. Steam Deck", correct: false }
        ]
    },
    {
        question: "Teknologi kesehatan terbaru yang paling revolusioner pada tahun 2024 adalah ?",
        answers: [
            { text: "A. Diagnosa AI", correct: false },
            { text: "B. Alat Pemantau Kesehatan Nirkabel", correct: false },
            { text: "C. Terapi Gen", correct: false },
            { text: "D. Implan Pintar", correct: true }
        ]
    },
    {
        question: "Sistem transportasi umum mana yang memperkenalkan teknologi baru pada tahun 2024 ?",
        answers: [
            { text: "A. Hyperloop", correct: false },
            { text: "B. Kereta Api Maglev", correct: true },
            { text: "C. Bis Listrik", correct: false },
            { text: "D. Taksi Terbang", correct: false }
        ]
    },
    {
        question: "Aplikasi AR baru apa yang paling populer pada tahun 2024 ?",
        answers: [
            { text: "A. Belanja Virtual", correct: true },
            { text: "B. Pendidikan Interaktif", correct: false },
            { text: "C. Navigasi", correct: false },
            { text: "D. Hiburan", correct: false }
        ]
    },
    {
        question: "Inovasi terbaru dalam chip komputer pada tahun 2024 adalah ?",
        answers: [
            { text: "A. Chip 3nm", correct: false },
            { text: "B. Quantum Processor", correct: false },
            { text: "C. Neuromorphic Chip", correct: true },
            { text: "D. Chip Fotonik", correct: false }
        ]
    },
    {
        question: "Platform media sosial mana yang mengintegrasikan fitur AI canggih pada tahun 2024 ?",
        answers: [
            { text: "A. Facebook", correct: false },
            { text: "B. TikTok", correct: true },
            { text: "C. Instagram", correct: false },
            { text: "D. Twitter", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
