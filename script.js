let userScore=0;
let copmScore=0;
const choices =document.querySelectorAll(".choice")
const msg =document.querySelector("#msg")

const userscorepara= document.querySelector("#user-score")
const compscorepara= document.querySelector("#comp-score")

const  gencomchoice =()=>{
    const options=["Rock","Paper","Scissors"]
    const randidx=Math.floor(Math.random()*3)
    return options[randidx];
}
const drawgame =()=>{
    console.log("game was draw");
    msg.innerHTML="game was draw!.play again"
    msg.style.backgroundColor="blue"
}
const showiner=()=>{
    if (userScore) {
        userScore++
        userscorepara.innerText =userScore
        msg.innerHTML=" Congratulation You win!"
        msg.style.backgroundColor ="green";
    }else{
        copmScore++
        compscorepara.innerText=copmScore;
        msg.innerHTML="uff! YOU lose."  
        msg.style.backgroundColor ="red";
    }
}
const playgame =(userchoice)=>{
    const compchoice = gencomchoice();
    if (userchoice===compchoice) {
        drawgame();
    }else{
        let user =true;
        if (userchoice==="Rock") {
            userwine=compchoice==="Paper"?false:true;
        }else if(userchoice==="Paper"){
            userwine= compchoice==="Scissors"? false:true;
        }else{
            compchoice==="Rock"? false :true
        }
        showiner(userScore)
    }
}
choices.forEach(function(choice){
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)
    })
})