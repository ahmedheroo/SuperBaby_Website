const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
const redBtn=document.querySelector("#red");
const grnBtn=document.querySelector("#green");
const bluBtn=document.querySelector("#blue");


redBtn.addEventListener("click",function(){
  cor=redBtn.innerHTML;
})
grnBtn.addEventListener("click",function(){
  cor=grnBtn.innerHTML;
})
bluBtn.addEventListener("click",function(){
  cor=bluBtn.innerHTML;
})
cor = "black"
function color(e){
  e.target.style.background=cor;
}

function setBoxes(length){
  for(i = 0; i < length**2; i++){
    let box = document.createElement("div");
    box.setAttribute("class","box")
    box.addEventListener("mouseover",color);
    container.setAttribute(`style`, `grid-template-columns: repeat(${length}, auto);
                                      grid-template-rows: repeat(${length}, auto);`)

    container.appendChild(box);
  }
}

function resetBoxes(e){
  const boxes = document.querySelectorAll(".box")
  for(i = 0; i < boxes.length;i++){
    boxes[i].remove();
  }
  let sideLength = prompt("Enter numebr of boxes per side.", 36);
  setBoxes(sideLength);
}


resetButton.addEventListener("click", resetBoxes);

setBoxes(36);
