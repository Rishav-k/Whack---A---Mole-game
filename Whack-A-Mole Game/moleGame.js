console.log("Hello !! I am JAvaScript");

var showScore = document.querySelector(".score");
console.log(showScore);
var score = 0 ;
var max = 2000 ;
var min = 1000 ;
var gameTime = 15000;
var holes = document.querySelectorAll(".hole");
console.log(holes);
var isTimeout = true ;

function startGame(){
    score = 0 ;
    isTimeout = false ;
    showScore.innerHTML = score ;
    console.log(score);
    peep();
    setTimeout(()=>{isTimeOut = true ;} ,gameTime)
}

function randomTime(){
    return Math.floor(Math.random()*(max - min) + min);
}
var prevHole;
function randomHole(holes){
    var holeNo = Math.floor(Math.random()*6);
    if(prevHole === holeNo){
         randomHole();
     }
     prevHole = holeNo;
    return holes[holeNo];
}
function peep(){
     var hole = randomHole(holes);
     var time =  randomTime();
     console.log(hole);;
     hole.classList.add('up');
     hole.addEventListener("click" , addScore);
     setTimeout(()=> {
            hole.removeEventListener("click" , addScore);
            hole.classList.remove("up");
            console.log(hole);
            if(!isTimeout){
                peep();
            }
        }, time);
}
function addScore(){
    console.log("click");
    score += 1;
    showScore.innerHTML = score;
}



