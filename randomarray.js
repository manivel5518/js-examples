function randomarr(arr)
{
	const arr1=Math.floor(Math.random()*arr.length);
	const arr2=arr[arr1];
	return arr2;
}
const array=['1',"mani",0,"vel",2];
const result=randomarr(array);
console.log(result);