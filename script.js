let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");

//game players
let turnX = true; // playerx, playero

const winPattern = [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8],
]

// let count = 0;
// const incrementFunction = () => {
//       count++
//       console.log(count);
// }
// boxes.forEach(box => {
//       box.addEventListener("click", incrementFunction);
// })
boxes.forEach((box)=> {
      box.addEventListener("click", () => {
            if(turnX){
                  box.innerHTML = "X";
                  box.style.color = "red";
                  turnX = false;
                  box.disabled = false;
            }else{
                  box.innerHTML = "O";
                  box.style.color = "black";
                  turnX = true;
                  box.disabled = false;
            }
            winner()
      });
      box.disable = true;
});
// reset function
const resetGame = () => {
      turnX = true;
      enableBoxes();
      msgContainer.classList.add("hide");
}

// disable function for btn
const disableBoxes = () => {
      for(let box of boxes){
            box.disabled = true;
      }
}
const enableBoxes = () => {
      for(let box of boxes){
            box.disabled = false;
            box.innerText = ""
      }
}

// show msg for winner
const showWinner = (winner) => {
      let msg = document.getElementById("msg");
      msg.innerText = `congratulation! ${winner} Winner.`
      msgContainer.classList.remove("hide")
      disableBoxes();
}

// winner function 
const winner = () => {
      for(let pattern of winPattern){
            // console.log(pattern[0],pattern[1],pattern[2]);
            // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                  if(pos1Val === pos2Val && pos2Val === pos3Val){
                        console.log("winner", pos1Val);
                        showWinner(pos1Val);
                  }
            }

            isDraw();
      }
}

const isDraw = () => {
      let empty = 0;
      for(let box of boxes){
            if(box.innerText === ""){
                  // return false;
                  empty++
            }

            // showWinner("it's a draw!");
            // return true;
      }
      if (empty === 0) {
            showWinner("draw game")
            return true;
      }else{
            return false;
      }
}

resetBtn.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)

