function sum(num){
	if (num>0)
	{
	return num+sum(num-1);
	}
}
const number=6;
const result=sum(number);
console.log(result);