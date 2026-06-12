console.log("Creating a Weather App");
const button1=document.getElementById("btn")
function changeBtn(){
    button1.innerText="You Clicked me.";
}

button1.addEventListener("click",changeBtn);

