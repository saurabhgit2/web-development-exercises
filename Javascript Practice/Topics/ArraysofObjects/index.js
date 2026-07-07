// let A=[
//     {num:1, name:'Saurabh'},
//     {num:2, name:'Dustin'},
//     {num:3, name:'Saurabh'},
//     {num:4, name:'Dustin'},
    
//  ];


//  writing a code to find an object in this array

// function findObject(A){
//     return A.name=='Dustin';
    
// }
// const user= A.find(findObject); 
// console.log(user);

// Arrow callback function, Find finds first matching while Filter finds all matching
// const foundObject= A.find(A=>A.name=='Dustin'); 
// console.log(foundObject);

// const objectFinder=A.filter(A=>A.name=='Saurabh');
// console.log(objectFinder);

//  Creating a new array using Map function
// doubling elements of A using map function

//  let A=[1,2,3,4]
// const b=A.map(A=>A*2);

// console.log(b);

// Using map, giving 30% to each

const employees=[
   {name:'Saurabh', salary:2500},
   {name:'Dustin', salary:2000},
   {name:'El', salary:3500}
];

const salary=employees.map(employee=>{
  return employee.salary+(employee.salary*0.3);
});
console.log(salary);

