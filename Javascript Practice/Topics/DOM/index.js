const changeBGC= document.getElementById("changeBGC");
const bgColor= document.getElementById("bgColor");

const colors = ["white", "yellow", "red", "purple"];
let index = 0;

function changeBackgroundColor() {
    index = (index + 1) % colors.length;
    bgColor.style.backgroundColor = colors[index];
}

changeBGC.addEventListener("click", changeBackgroundColor);

