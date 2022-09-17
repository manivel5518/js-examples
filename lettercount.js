function countstr(str,leter)
{
	let count=0;
	for(let i=0;i<str.length;i++)
	{
	if(str.charAt(i)==leter)
	{
	count=count+1;
	}
	}
	return count;
}
let str="mama";
let leter="a";
let cnt=countstr(str,leter);
console.log(cnt);