function cmpage(a,b)
{
	return a.age-b.age;
}
const student=[{name:'sara',age:24},{name:'john',age:22},{name:'jack',age:27}];
console.log(student.sort(cmpage));