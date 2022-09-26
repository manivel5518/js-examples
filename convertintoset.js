function fun(arr1,arr2)
{
	const setA=new Set(arr1);
	const setB=new Set(arr2);
	let result=[];
	for(let i of setB)
	{
	if (setA.has(i))
	{
	result.push(i);
	}
	}
	return result;
}
const arr1=[1,2,3,5,9];
const arr2=[1,3,5,8];
const result1=fun(arr1,arr2);
console.log(result1);