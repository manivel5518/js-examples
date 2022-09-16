const number1=10;
const number2=5;
const sym="*";
let result;
if(sym=="+")
{
result=number1+number2;	
}
else if(sym=="-")
{
	result=number1-number2;
}
else if(sym=="*")
{
	result=number1*number2;
}
else
{
	result=number1/number2;
}
console.log("the result is"+result);