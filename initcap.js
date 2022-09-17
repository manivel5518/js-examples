function intcap(str)
{
	const leter=str.charAt(0).toUpperCase()+str.slice(1);
	return leter;
}
let str="mani";
let result=intcap(str);
console.log(result);