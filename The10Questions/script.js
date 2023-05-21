
//inits
const question = document.getElementById('Question');
const answer1 = document.getElementById('Answer1');
const answer2 = document.getElementById('Answer2');
const asc1 = document.getElementById('ASC_1');
const asc2 = document.getElementById('ASC_2');
let qNumber = 0;
let click = 0;
let scoreInt = 0;
const score = [''];
const questions = ["", "What is the capital of Australia?", "Who painted the Mona Lisa?", "What is the chemical symbol for gold?", "Who wrote the novel 'Pride and Prejudice'?", "What is the largest planet in our solar system?", "What is the national animal of Canada?", "Which scientist is famous for the theory of relativity?", "Who was the first man to step on the moon?", "What is the chemical formula for water?", "Who is the author of the Harry Potter book series?"]
const answersLeft = ["", "a) Sydney", "a) Vincent van Gogh", "a) Au", "a) Jane Austen", "a) Jupiter", "a) Beaver", "a) Isaac Newton", "a) Neil Armstrong", "a) H2O", "a) J.K. Rowling"];
const answersRight = ["", "b) Canberra", "b) Leonardo da Vinci", "b) Ag", "b) Charlotte Brontë", "b) Saturn", "b) Moose", "b) Albert Einstein", "b) Buzz Aldrin", "b) CO2", "b) Stephen King"];

questionSwitch();

function questionSwitch(i) {
    switch (qNumber){
        case 0:
            //main page
            asc2.style.display = "none";
            question.innerHTML = "The 10 Questions";
            answer1.innerHTML = "Start?";
            break;
        case 1:
            asc2.style.display = "flex";
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 2:
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 3:
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 4:
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 5:
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 6:
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 7:
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 8:
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 9:
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 10:
            question.innerHTML = `Question ${qNumber} <br> ${questions[qNumber]}`;
            answer1.innerHTML = `${answersLeft[qNumber]}`;
            answer2.innerHTML = `${answersRight[qNumber]}`;
            break;
        case 11:
            //last page
            asc2.style.display = "none";
            score.shift();
            question.innerHTML = `Your score is ${scoreInt}/10 <br><div style="font-size: 1rem;" > ${score}</div>`;
            answer1.innerHTML = "Restart?";
            break;
        default:
            break;
    }
}

function onClickHandle(i) {
    switch (qNumber){
        case 1:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - X`);
                    break;
                case 2:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
            }
            break;
        case 2:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - X`);
                    break;
                case 2:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
            }
            break;
        case 3:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
                case 2:
                    score.push( ` ${qNumber} - X`);
                    break;
            }
            break;
        case 4:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
                case 2:
                    score.push( ` ${qNumber} - X`);
                    break;
            }
            break;
        case 5:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
                case 2:
                    score.push( ` ${qNumber} - X`);
                    break;
            }
            break;
        case 6:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
                case 2:
                    score.push( ` ${qNumber} - X`);
                    break;
            }
            break;
        case 7:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - X`);
                    break;
                case 2:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
            }
            break;
        case 8:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
                case 2:
                    score.push( ` ${qNumber} - X`);
                    break;
            }
            break;
        case 9:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
                case 2:
                    score.push( ` ${qNumber} - X`);
                    break;
            }
            break;
        case 10:
            switch (i){
                case 1:
                    score.push( ` ${qNumber} - ✓`);
                    scoreInt++;
                    break;
                case 2:
                    score.push( ` ${qNumber} - X`);
                    break;
            }
            break;
        case 11:
            qNumber = 0;
            click = 0;
            scoreInt = 0;
            score.length = 0;
            break;
    }
    console.log(qNumber);
    console.log(score);
    qNumber++;
    questionSwitch(i);
}