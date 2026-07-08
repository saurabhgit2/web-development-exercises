// Create an object and have fullname get and set.

const person={
    fName:"",
    lName:"",
    get fullName(){
        return `${this.fName} ${this.lName}`;
    },
    set fullName(value){
          const part=value.split(" ");
          this.fName=part[0];
          this.lName=part[1];
    }
};

person.fullName="Saurabh Singh";
console.log(person.fullName);