const person={
	name:"mani",
	age:30,
	hobbie:["music","game","dance"],
	greet:function()
	{
 console.log("hi");
	},
	score:{maths:90,eng:80}
};
console.log(person);
delete person.greet;
console.log(person);
delete person.name;
console.log(person);