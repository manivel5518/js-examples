function removedup(arr1,arr2)
{
	let arr=[...arr1,...arr2];
	let array=[...new Set(arr)];
	console.log(array);
}
let a=[1,2,3];
let c=[2,3,4];
removedup(a,c);