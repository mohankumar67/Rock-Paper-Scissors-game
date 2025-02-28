let userscore=0;
let compscore=0;
 const choices = document.querySelectorAll(".choice");
  
 const msg=document.querySelector("#msg");
 const userscorepara=document.querySelector("#user-score");

 const compscorepara=document.querySelector("#computer-score");



 
 const genCmptrChoice =() =>{
    const options = ["rock" ,"paper" ,"scissors"];
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
 };

const draweGame=()=>{
    console.log("game is draw.");
    msg.innerText="Match Was Draw";
    msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin,userChoice,compChoice) =>{
     if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
       msg.innerText="You Win!";
       msg.style.backgroundColor="green"

     } else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText ="You Lose";
        msg.style.backgroundColor="red"

     }
}

 const playGame=(userChoice)=>{
console.log("user choice",userChoice);
const compChoice=genCmptrChoice();
console.log("comp choice=" ,compChoice);
if (userChoice===compChoice){
    draweGame();
} else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compChoice==="paper" ? false:true;
    } else if(userChoice==="paper"){
         userwin=compChoice==="scissors" ? false:true;
    } else{
        userwin=compChoice==="rock"? false:true;
    }
    showwinner(userwin);
}
 };


 choices.forEach((choice )=>{
    console.log(choice);
    choice.addEventListener("click" , ()=>{
        let userChoice = choice.getAttribute("id");
     playGame(userChoice);
    });
 });