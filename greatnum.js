const num1=200;
const num2=10;
const num3=100;
let a;
if(num1>=num2 && num1>=num3)
{
a=num1;
}
else if(num2>=num1 && num2>=num3)
{
	a=num2;
}
else 
{
	a=num3;
}
console.log("the larg number is"+a);