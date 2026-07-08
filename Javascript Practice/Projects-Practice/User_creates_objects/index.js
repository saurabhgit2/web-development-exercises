const submit=document.getElementById("Submit");
const person={};

function addData(){
      const key=document.getElementById("key").value;
      const value=document.getElementById("value").value;
      person[key]=value;
      console.log(person);
};

submit.addEventListener('click',addData);
