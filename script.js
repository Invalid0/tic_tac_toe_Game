console.log("Welcome to Tic Tac Toe");
let audioMusic = new Audio("./music.mp3");
let audioTurn = new Audio("./ting.mp3");
let audioGameOver = new Audio("./gameover.mp3");
let palyerTurn = "X";
let gameover = false;

//Function to change X or 0
const changeTurn = () =>{
    return palyerTurn === "X" ? "0" : "X";
}

//Function to check for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
         if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText ) 
            && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameover = true;
            document.querySelector('.imgContainer').getElementsByTagName('img')[0].style.width = "56px";
            document.querySelector('.gameover').innerHTML = "Game Over Press CTRL + R to restart the game";
            audioGameOver.play();
        }
    })
}
//Game Logic

let boxs = document.getElementsByClassName("box");
Array.from(boxs).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML == ""){
            boxtext.innerHTML = palyerTurn;
            palyerTurn = changeTurn();
            checkWin();
            audioTurn.play();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerHTML = "Turn for" + palyerTurn;
        }
        }
    })
})