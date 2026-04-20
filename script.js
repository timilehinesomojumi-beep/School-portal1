
function login() {
    let u = document.getElementById("Matric no").value;
    let p = document.getElementById("password").value;

    if (u === "14387" && p === "12345") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
    } else {
        document.getElementById("error").innerText = "Wrong login";
    }
}

function logout() {
    location.reload();
}


function show(section) {
    document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
    document.getElementById(section).classList.remove("hidden");

    if (section === "questions") ;
}




const quizzes = {
    math: {
        q1: { question: "2 + 2", answer: "4" },
        q2: { question: "10 - 3", answer: "7" },
        q3: { question :"find the value of 6 * 3", answer:"18"}
    },

    english: {
        q1: { question: "Opposite of 'Good'?", answer: "bad" },
        q2: { question: "Fill in: She ___ going", answer: "is" }
    },

    python: {
        q1: { question: "What is the output of print(2**3)?", answer: "8" },
        q2: { question: "how to display text in Python?", answer: "print" }
    },

    js: {
        q1: { question: "JS keyword for variable?", answer: "let" },
        q2: { question: "Function to log output?", answer: "console.log" }
    }
};

let currentQuiz = {};


function loadQuiz(subject) {
    currentQuiz = quizzes[subject];

    let container = document.getElementById("quizContainer");
    container.innerHTML = ""; 

    for (let key in currentQuiz) {
        let q = document.createElement("p");
        q.innerText = currentQuiz[key].question;

        let input = document.createElement("input");
        input.id = key;

        container.appendChild(q);
        container.appendChild(input);
    }
}


function submitQuiz() {
    let score = 0;

    for (let key in currentQuiz) {
        let userAnswer = document.getElementById(key).value.toLowerCase();

        if (userAnswer == currentQuiz[key].answer) {
            score++;
        }
    }

    document.getElementById("score").innerText =
        "Score: " + score + "/" + Object.keys(currentQuiz).length;
}



function calculateGPA() {
    let c1 = Number(document.getElementById("course1").value);
    let c2 = Number(document.getElementById("course2").value);
    let c3 = Number(document.getElementById("course3").value);

    let avg = (c1 + c2 + c3) / 3;

    let grade = "";
    if (avg >= 70) grade = "A";
    else if (avg >= 60) grade = "B";
    else if (avg >= 50) grade = "C";
    else grade = "F";

    document.getElementById("gpaResult").innerText =
        "Average: " + avg + " | Grade: " + grade;
}


function addAnnouncement() {
    let msg = document.getElementById("newMsg").value;

    let li = document.createElement("li");
    li.innerText = "📢 " + msg;

    document.getElementById("news").appendChild(li);
}