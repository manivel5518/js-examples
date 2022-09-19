const student={name:'mani',age:30,
              hobbies:['reading','game','coding'],};

for(let key in student)
{
	let value;
	value =student[key];
	console.log(key +"="+value);
}