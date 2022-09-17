function cntvow(str)
{
	const cnt=str.match(/[aeiou]/gi).length;
	return cnt;
}

let string="lenin";
let call=cntvow(string);
console.log(call);