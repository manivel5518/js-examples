function fibo(num)
{
	if(num<2)
	{
	return num
	}
	else
	{
	return fibo(num-1)+fibo(num-2);
	}
}
let term=5;
if(term<=0)
{
	console.log("enter positive number");
}
else
{
	for(let i=0;i<term;i++)
	{
	console.log(fibo(i));
	}
}