let userSeq =[];
let gameSeq =[];
let level=0;
let gameStart=false;//game not yet started
let start_heading =document.querySelector("h4");
let h3 = document.querySelector("h3");

let btns = ["pink","blue","green","yellow"];//classes of buttons

document.addEventListener("keypress",function(){
    if(gameStart==false){
        start_heading.innerText ="Game started !";
        gameStart=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randomIndx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIndx];
    let randBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    btnFlash(randBtn);
};

function checkBtn(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game Over !Your Score was <b>${level}</b><br>Press any key to restart !`;
        document.querySelector("body").style.backgroundColor="#c9184a";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#fff";
        },150);
        reset();
    }

};

function btnPress(){
   let btn = this;
   btnFlash(btn);

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   
   checkBtn(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameStart=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}