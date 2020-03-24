
var divs = new Array(16);
for (let i = 0; i < divs.length; i++) {
    divs[i]=document.createElement('div');
    document.getElementById("grid_container").appendChild(divs[i]);
}
divs.forEach(function(elem) {
    elem.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor="black";
    });
});
