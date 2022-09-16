let number=5;
if(number<0)
{
	console.log("the number is negative");
}
else if(number===0)
{
	console.log("factorial of 0 is 1");
}
else
{
	let fact=1;
	for(i=1;i<=number;i++)
	{
	fact *=i;
	}
	console.log("factorial of given number"+fact);
}