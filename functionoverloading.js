function myfun()
{
	if(arguments.length==0)
	{
	console.log("please pass argument");
	}
	else if(arguments.length==1)
	{
	console.log("minimum pass two arguent");
	}
	else
	{
	let result=0;
	let n=arguments.length;
	for(let i=0;i<=n;i++)
	{
	result=result+arguments[i];
	console.log(result);
	}
	}
}
myfun();
myfun(1);
myfun(2,3);
myfun(1,2,3,4,5);