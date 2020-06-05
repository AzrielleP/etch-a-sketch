let gridNumber = +prompt("What grid size do you want?");
let container = document.querySelector(".container");
let clear = document.querySelector(".clear");
let rainbowPen = document.querySelector(".rainbowPen");
let pencil = document.querySelector(".pencil");
let blackPen = document.querySelector(".blackPen");
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
    buttons.addEventListener("click", choosePen);

    function choosePen(event){
        let chosenPen = event.target.className;
        if (chosenPen == "clear"){
            clearCanvas();
        }
        else if (chosenPen == "blackPen"){
            useBlackPen();
        }
        else if(chosenPen == "rainbowPen"){
            useRainbowPen();
        }
        else if(chosenPen == "pencil"){
            usePencil();
        }
    }
}

function clearCanvas(){
    clear.addEventListener("click", ()=>{
        let all = document.querySelectorAll(".box");
        for (let i = 0; i < all.length; i++){
            all[i].style.backgroundColor = "white";
        }
    }) 
}

function useRainbowPen(){
    rainbowPen.addEventListener("click", () => {
        let hex = "0123456789ABCDEF";
        let bgColor = "#";
        for(let i =0; i < 6; i++){
            bgColor += hex[Math.floor(Math.random() * hex.length)];
        }
        draw(bgColor);
    })
}

function randomizeColor(){
    container.addEventListener("")
}

function useBlackPen(){
    draw("black");
}

function usePencil(){

}

function draw(pen){
    container.addEventListener("mouseover", event=>{
        if(event.target !== event.currentTarget){
            event.target.style.backgroundColor=pen;
            }
            event.stopPropagation();
    })
}