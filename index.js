"strict mode";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const computerImage = document.querySelector("#userImage");
const playerImage = document.querySelector("#playerImage");
const half1 = document.querySelector(".half1");
const half2 = document.querySelector(".half2");
const restartButton = document.querySelector(".restart");

let intervalID = setInterval(opponentTurn, 50);
let randComputer;

function opponentTurn() {
    randComputer = Math.floor(Math.random() * 3);
    if (randComputer === 0){
        computerImage.src = "./image/rock1.png";
    } else if (randComputer === 1){
        computerImage.src = "./image/paper1.png";
    } else if (randComputer === 2){
        computerImage.src = "./image/scissor1.png";
    }
}

rock.addEventListener("click", function(){
    playerImage.src = "./image/rock2.png";
    clearInterval(intervalID);

    if (randComputer === 0){
        //Draw
        half1.classList.add("draw");
        half2.classList.add("draw");
    } else if (randComputer === 1){
        //loose
        half2.classList.add("red");
    } else if (randComputer === 2){
        //win
        half2.classList.add("green");
    }
})

paper.addEventListener("click", function(){
    playerImage.src = "./image/paper2.png";
    clearInterval(intervalID);

    if (randComputer === 0){
        //Win
        half2.classList.add("green");
    } else if (randComputer === 1){
        //Draw
        half1.classList.add("draw");
        half2.classList.add("draw");
    } else if (randComputer === 2){
        //loose
        half2.classList.add("red");
    }
})

scissor.addEventListener("click", function(){
    playerImage.src = "./image/scissor2.png";
    clearInterval(intervalID);

    if (randComputer === 0){
        //loose
        half2.classList.add("red");
    } else if (randComputer === 1){
        //win
        half2.classList.add("green");
    } else if (randComputer === 2){
        //Draw
        half1.classList.add("draw");
        half2.classList.add("draw");
    }
})

function restart(){
    if(half1.classList.contains("draw")){
        half1.classList.remove("draw");
        half2.classList.remove("draw")
    } else if (half2.classList.contains("green")){
        half2.classList.remove("green");
    } else if (half2.classList.contains("red")) {
        half2.classList.remove("red");
    }

    intervalID = setInterval(opponentTurn,50);
}


restartButton.addEventListener("click", restart);


