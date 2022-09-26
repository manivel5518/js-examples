function myfun(arr,pos)
{
	let arr1;
	while(arr.length>0)
{
	 arr1=arr.splice(0,pos);
console.log(arr1);
}
}
const arr1=[1,2,3,4,5,6,7,8];
const pos1=2;
myfun(arr1,pos1);