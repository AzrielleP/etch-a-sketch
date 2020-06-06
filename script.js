let gridNumber = +prompt("What grid size do you want?");
let container = document.querySelector(".container");
let clear = document.querySelector(".clear");

let buttons = document.querySelector(".buttonContainer");

createGrid(gridNumber);
startDraw();

function createGrid(gridNumber){
    let div;
    container.style.gridTemplate = `repeat(${gridNumber}, 1fr)/repeat(${gridNumber}, 1fr)`;
    for(let i = 0; i<gridNumber; i++){
        for (let j = 0; j< gridNumber; j++){
            div = document.createElement("div");
            div.className = "box";
            container.appendChild(div);
        }
    }
}

function startDraw(){
    buttons.addEventListener("click", event=>{
        let chosenPen = event.target.className;
        if (chosenPen == "clear"){
            clearCanvas();
        }
        else draw(chosenPen);
    });
}

function draw(pen){
    container.addEventListener("mouseover", event=>{
        if(event.target !== event.currentTarget){
           if (pen == "blackPen"){
                event.target.style.backgroundColor= "black";
                }
            else if (pen == "rainbowPen"){
                event.target.style.backgroundColor = useRainbowPen();
            }
            //if (pen == "pencil"){
                //event.target.style.backgroundColor = usePencil();
            //}
        event.stopPropagation();
        }
    })   
}

function clearCanvas(){
    let all = document.querySelectorAll(".box");
    for (let i = 0; i < all.length; i++){
        all[i].style.backgroundColor = "white";
    }
}

function useRainbowPen(){
    let hex = "0123456789ABCDEF";
    let bgColor = "#";
    for(let i =0; i < 6; i++){
        bgColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return bgColor;
}



