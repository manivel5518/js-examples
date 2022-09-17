const person={
	           name:"mani",
               age:30,
               hobbies:["music","game","dance"],
               greet:function()
               {
               console.log("hellow everyone");
               },
               score:{math:90,science:80}
               };
console.log(typeof person);
console.log(person.name);
console.log(person.hobbies[0]);
console.log(person.score.math);
person.greet();