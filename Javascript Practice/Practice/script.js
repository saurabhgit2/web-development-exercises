//  Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length
// let name='Saurabh';
// username='@'+name+`${name.length}`;
// console.log(username)

// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer

// A=[250, 645, 300, 900, 50]
// B=[]
// for(let item in A){ 
//  let items=A[item]-(A[item]*0.1);
//  B.push(items)
// }
// console.log(B)

Companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// Remove first company
// Companies.shift();
// console.log(Companies);
// Companies.splice(2,2,"Ola");
// console.log(Companies);

// Companies.push("Amazon");
// console.log(Companies);

// Strings, find vowels

// let A="Saurabh";
// let vowels="aeiou";
// let count=0;
// for(let char of A.toLowerCase()){
//     // console.log(char);
//     if(vowels.includes(char)){count++;}
    
    

// }
// console.log(`The number of vowels in Saurabh are ${count}.`);

// const vowelCount=(A) =>{
//     for(let char of A.toLowerCase()){
//         console.log(char);
//         if(vowels.includes(char)){count++;}
        
//     }
//     console.log(`The number of vowels in Saurabh are ${count}.`);
// }
// vowelCount(A);
function changeText(){
    document.getElementById("para").textContent="Saurabh";
}
let clicktoChange=document.getElementById("changeTextBtn");
clicktoChange.addEventListener("click",changeText);
