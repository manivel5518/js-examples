function myfun(filename)
{
	let exten=filename.split('.').pop();
	return exten;
}
const result1=myfun('demo.js');
console.log(result1);
const result2=myfun('demo.htm');
console.log(result2);