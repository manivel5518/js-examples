let hcf;
let num1=20;
let num2=84;
for(let i=0;i<=num1 && i<=num2;i++)
{
	if(num1 % i == 0 && num2 % i==0)
	{
	hcf=i;
	}
}
console.log("the hfc is"+hcf);