function grid_creator(rows, cols) {
  grid_container.style.setProperty('--grid-rows', rows);
  grid_container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    divs[i]= document.createElement("div");
    add_hover(divs[i]);
    grid_container.appendChild(divs[i]);
  };
};
function add_hover(div){
    div.addEventListener("mouseover", function(event) {
        
        event.target.style.backgroundColor="black";
    });
}

let divs = new Array(16); 
const grid_container = document.getElementById("grid_container");
grid_creator(4,4);

let reset_button=document.getElementById("reset_button");
reset_button.addEventListener("click",function myFunction(){
    let side=prompt("Please enter how many squares per side you want","4");
    while (grid_container.firstChild) {
        grid_container.removeChild(grid_container.lastChild);
      }
    grid_creator(side,side);
})
