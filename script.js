let container = document.querySelector(".container");
let clear = document.querySelector(".clear");

let gridNumber = +prompt("What grid size do you want?");


createGrid(gridNumber);


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

    function clearCanvas(){
        clear.addEventListener("click", ()=>{
            let all = document.querySelectorAll(".box");
            for (let i = 0; i < all.length; i++){
                all[i].style.backgroundColor = "white";
            }
        })
        
    }
    draw();
    clearCanvas();
}

function draw(){
    container.addEventListener("mouseover", event=>{
        if(event.target !== event.currentTarget){
        event.target.style.backgroundColor="black";
        }
        event.stopPropagation();
    })
}

