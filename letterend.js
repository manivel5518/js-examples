function fun1(str)
{
	if(str.startsWith('s') && str.endsWith('g'))
	{
	console.log("string start with S and ends with G");
	}
	else if(str.startsWith('s'))
	{
	console.log("string start with S not ends with G");
	}
	else if(str.endsWith('g'))
	{
	console.log("not starting with S and ends with G");
	}
	else
	{
	console.log("not starts with S and not ends with G");
	}
}
let str2="say";
fun1(str2);