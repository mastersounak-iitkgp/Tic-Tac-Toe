let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
const winners=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetGame=()=>{
  turnO=true;
  count=0;
  enableboxes();
  msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO)
    {
      box.innerText="O";
      turnO=false;
    }
    else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    count++;
    let iswinner=checkwinner();
    
    if(!iswinner && count===9){
      drawGame();  
    console.log("Game is draw");}

  })
})
const displaymsg=(winner)=>{
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  boxes.forEach((box)=>{
    box.disabled=true;});
}
const drawGame=()=>{
  msgcontainer.classList.remove("hide");
  msg.innerText="Game is Draw";
  boxes.forEach((box)=>{
    box.disabled=true;});
}

const enableboxes=()=>{
  boxes.forEach((box)=>{ 
    box.disabled=false;
    box.innerText="";
    
  })
}
const checkwinner=()=>{
  for(let pattern of winners)
  {
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!="")
    {
      if(pos1val===pos2val && pos2val === pos3val)
      {
        console.log(`winner is ${pos1val}`);
        boxes.forEach((box)=>{
        box.disabled=true;});
        displaymsg(pos1val);
        return true;
      }
      else{
        return false;
      }
    }

  }
}
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
