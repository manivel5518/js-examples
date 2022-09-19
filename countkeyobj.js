const person ={name:"mani",age:30,
              habbie:['game','reading'],}
let count=0;
for(let key in person)
{
	++count;
}
console.log(count);