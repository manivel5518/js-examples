function myfun(variable)
{
	if(typeof variable==='function')
	{
	console.log('this variable is function type');
	}
	else
	{
	console.log("this variable is not function type ")
	}
}
const count=true;
const d=function()
{
	console.log('hi');
}
myfun(count);
myfun(d);