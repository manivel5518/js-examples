function myfun(x)
{
	if(typeof x=='number' && !isNaN(x))
	{
	if(Number.isInteger(x))
	{
	console.log(`${x} is a integer number`)

	}
	else
	{
    console.log(`${x} is a floot number`);
	}
	}else 
	{
	console.log("it is not a number");
	}
}
myfun('hello');
myfun(44);
myfun(3.4);
myfun(-3,4);
myfun(NaN);