const person={name:"mani",age:30,}
const cloneperson=Object.assign({},person);
cloneperson.name="vel";
console.log(cloneperson.name);
console.log(person.name);