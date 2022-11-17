const dicideArr = ["Rock", "Paper", "Scissors"];
const message = document.querySelector('#message');
const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", toss)
}

function toss(e){
    console.log(e.target.innerText);
    let robot = Math.floor(Math.random()*2)
    console.log("robot: " + dicideArr[robot])
}

