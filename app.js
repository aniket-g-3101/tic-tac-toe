let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let msg=document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container")
let turn1 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if (turn1)
        {
            box.innerText="O";
            turn1=false;
        }
        else
        {
            box.innerText="X";
            turn1=true;
        }
        box.disabled=true;
        Winner();
    });
});


let resetGame = () => {
    turn1 = true;

    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });

    msgcontainer.classList.add("hide");
    msg.innerText = "";
};


let showWinner=(winner)=>{
        msg.innerText=`Winner is ${winner}`;
        msgcontainer.classList.remove("hide");      
};


let Winner=()=>{
    for(pattern of winPatterns)
    {
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                showWinner(pos1);

                for (box of boxes){
                    box.disabled=true;
                }
            }
            else{
                checkDraw();
            }
        }

    }
};
let checkDraw = () => {
    let filled = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            filled = false;
        }
    });

    if (filled) {
        msg.innerText = "It's a Draw ✌️!";
        msgcontainer.classList.remove("hide");
    }
};


resetbtn.addEventListener("click",resetGame);