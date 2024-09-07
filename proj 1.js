let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".rstBtn");
let newBtn = document.querySelector(".newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true;

const winPatterns = 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>
{
    box.addEventListener(("click"),() =>
    {
        if(turnO === "true")
        {
            box.innerText ="O";
            turnO = "false";
            count ++;
        }
        else
        {
            box.innerText ="X";
            turnO = "true";
            count ++;
        }
        console.log(count);
        if(count===9)
        {
            gameDraw();
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
    
}

const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
    
}
const showWinner = (winner) =>
{
    msg.innerText = `congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () =>
{
    for( let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "")
        {
            if(pos1Val === pos2Val  && pos3Val === pos2Val )
            {
                disableBoxes();
                showWinner(pos1Val);
            }
        }
    }
}

const resetGame = () =>
{
    turnO = true;
    enableBoxes();
    count = 0;
}

const gameDraw = () =>
{
    
    msg.innerText = `This is a draw!!. Try Another Round `;
    msgContainer.classList.remove("hide");

}


newBtn.addEventListener("click",resetGame);
rstBtn.addEventListener("click",resetGame);