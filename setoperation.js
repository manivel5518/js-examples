function myfun(a,b)
{
	const newunion=new Set(a);
	for(let i of b)
	{
		newunion.add(i);
	}
return newunion;
}
const arr1=new Set(['mango','apple','banana','mango']);
const arr2=new Set(['orange','apple','papaya']);
const result=myfun(arr1,arr2);
console.log(result);