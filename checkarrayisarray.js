function checkobj(arr)
{
	const result=Array.isArray(arr);

	if (result)
	{
	console.log(`[${arr}] is an arrey.`);
	}
	else
	{
	console.log(`[${arr}] is not an arrey`);
	}
}
 const array=[1,2,3];
 checkobj(array);
