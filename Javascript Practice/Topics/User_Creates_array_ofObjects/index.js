
const submit=document.getElementById("submit");
const output=document.getElementById("output");
const array=document.getElementById("array");
const oparray=document.getElementById("oparray");


let people=[];
let person={};

function addData(){
    const Key=document.getElementById("Key").value;
    const Value=document.getElementById("Value").value;
    person[Key]=Value;  
    console.log(person);    
    output.textContent=JSON.stringify(person,null,2);   
};  

function addArray(){
    people.push(person);  
    person={};
    oparray.textContent=JSON.stringify(people,null,2); 
}

submit.addEventListener('click',addData);
array.addEventListener('click',addArray);

