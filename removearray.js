function arrfun(array,pos)
{
let newarr=[];
	for(let i=0;i<array.length;i++)
	{
	if(array[i]!==pos)
	{
	newarr.push(array[i]);
	}
	}
	return newarr;
}
const result=arrfun([1,2,3,4,5],2);
console.log(result);