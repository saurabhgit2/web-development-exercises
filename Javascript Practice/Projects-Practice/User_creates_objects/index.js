const submit=document.getElementById("Submit");
const person={};
const createdObj=document.getElementById("createdObj");


function addData(){
      const key=document.getElementById("key").value;
      const value=document.getElementById("value").value;
      person[key]=value;
      console.log(person);
      
      createdObj.textContent=JSON.stringify(person, null, 2);
};

submit.addEventListener('click',addData);


