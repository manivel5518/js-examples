function polin(string)
{
	const len=string.length;

	for(let i=0;i<len/2;i++)
	{
	if(string[i]!==string[len-1-i])
	{
	return "it is not polindrom";
	}
	}
	return "it is polindrom";
}
const string="dad";
const value=polin(string);
console.log(value);