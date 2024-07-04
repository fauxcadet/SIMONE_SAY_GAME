//1.key press ---> game start-->
//2. level1 ++ button flasshes
//3. button press ,then check and match 

let gameseq = [];
let userseq = [];
let btns = ["yelow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false)
        console.log("game is started");
    started = true;
    levelup();
});
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300)

}
function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    //random btn choose
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    //console.log(randidx);
    //console.log(randcolor);
    //console.log(randbtn);
    gameseq.push(randcolor);
    // console.log(gameseq);
    btnflash(randbtn);


}
function checkans(idx) {
    //console.log("current level:",level);
    //let idx =level-1;
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 500);
        }
    }
    else {
        h2.innerHTML = `game over! your score was${ level-1 }<br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnpress() {

    let btn = (this);

    btnflash(btn);
    let usercolor = btn.getAttribute("id");
   // console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length - 1);



}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level =0;
}
